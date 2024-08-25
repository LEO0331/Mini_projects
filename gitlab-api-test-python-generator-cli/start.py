import openapi_client
from openapi_client.models.api_entities_metadata import APIEntitiesMetadata
from openapi_client.rest import ApiException
from pprint import pprint
import os
import requests
import sqlite3
from sqlite3 import Error
import os
from dotenv import load_dotenv

load_dotenv()

# Create a SQLite database connection
def create_connection():
    conn = None
    try:
        conn = sqlite3.connect('gitlab_data3.db',isolation_level=None)
        print("Success: Connected to SQLite")
    except Error as e:
        print(e)
    return conn

# Create a new table in SQLite
def create_table(conn):
    try:
        sql = '''CREATE TABLE IF NOT EXISTS projects (
                    version text,
                    revision text,
                    enabled INTEGER,
                    externalUrl text,
                    enterprise INTEGER)'''
        c = conn.cursor()
        c.execute(sql)
        print("Success: Create table")
    except Error as e:
        print(e)

# Insert data into the SQLite database
def insert_data(conn, project):
    sql = '''INSERT INTO projects(version, revision, enabled, externalUrl, enterprise) VALUES(?,?,?,?,?)'''
    cur = conn.cursor()
    cur.execute(sql, project)
    cur.close()

# Defining the host is optional and defaults to https://www.gitlab.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.gitlab.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Main function
def main():
    conn = create_connection()

    # Enter a context with an instance of the API client
    with openapi_client.ApiClient(configuration) as api_client:
        # Create an instance of the API class
        api_instance = openapi_client.MetadataApi(api_client)

        try:
            # Retrieve metadata information for this GitLab instance
            api_response = api_instance.get_api_v4_metadata()
            print("The response of MetadataApi->get_api_v4_metadata:\n")
            pprint(api_response)
        except Exception as e:
            print("Exception when calling MetadataApi->get_api_v4_metadata: %s\n" % e)

    if conn is not None:
        create_table(conn)
        version = api_response.version
        revision = api_response.revision
        enabled = api_response.kas.enabled
        externalUrl = api_response.kas.external_url
        enterprise = api_response.enterprise
        project = (version, revision, enabled, externalUrl, enterprise)
        insert_data(conn, project)

if __name__ == '__main__':
    main()
