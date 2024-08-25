import unittest
import sqlite3
from openapi_client.api.metadata_api import MetadataApi

arr = ['version', 'revision', 'enabled', 'externalUrl', 'enterprise']

class TestMetadataApi(unittest.TestCase):
    """MetadataApi unit test stubs"""

    def setUp(self) -> None:
        self.api = MetadataApi()

    def tearDown(self) -> None:
        pass

    def test_get_api_v4_metadata(self) -> None:
        """Test case for get_api_v4_metadata

        Retrieve metadata information for this GitLab instance
        """
        con = sqlite3.connect('gitlab_data3.db')
        curs = con.cursor()
        data = curs.execute("select * FROM projects")
        for index, item in enumerate(data.description):
            self.assertEqual(arr[index], item[0])
        for row in data:
            self.assertIsNotNone(row)
        curs.close()

if __name__ == '__main__':
    unittest.main()
