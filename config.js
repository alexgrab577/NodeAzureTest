var config = {}

config.endpoint = "https://atgdocumentdb.documents.azure.com:443/";
config.authKey = "C4KfxFYPBjBSGn38aG2N81GCFTuQOTcWWYIgFhHjd6bBa6bBBnyDgQs79ptDahniHc0aZGvht3HQ5hs0dDyeIg==";

/*var storageAccount = "mycustomblob";
var accountKey = "Nn5Vo7jZ4CW7jKw8wVfT3zZIe50favamvhDqGCYDBxZ76kw6xvb6s2trwangEgPHXOJnp0ESGwfFlbpJawaK4Q==";*/

config.dbDefinition = {"id": "FamilyRegistry"};
config.collDefinition = {"id": "FamilyCollection"};

var documents = {
  "Andersen": {
    "id": "AndersenFamily",
    "LastName": "Andersen",
    "Parents": [
      {
        "FirstName": "Thomas"
      },
      {
        "FirstName": "Mary Kay"
      }
    ],
    "Children": [
      {
        "FirstName": "Henriette Thaulow",
        "Gender": "female",
        "Grade": 5,
        "Pets": [
          {
            "GivenName": "Fluffy"
          }
        ]
      }
    ],
    "Address": {
      "State": "WA",
      "County": "King",
      "City": "Seattle"
    }
  },
  "Wakefield":   {
      "id": "WakefieldFamily",
      "Parents": [
        {
          "FamilyName": "Wakefield",
          "FirstName": "Robin"
        },
        {
          "FamilyName": "Miller",
          "FirstName": "Ben"
        }
      ],
      "Children": [
        {
          "FamilyName": "Merriam",
          "FirstName": "Jesse",
          "Gender": "female",
          "Grade": 8,
          "Pets": [
            {
              "GivenName": "Goofy"
            },
            {
              "GivenName": "Shadow"
            }
          ]
        },
        {
          "FamilyName": "Miller",
          "FirstName": "Lisa",
          "Gender": "female",
          "Grade": 1
        }
      ],
      "Address": {
        "State": "NY",
        "County": "Manhattan",
        "City": "NY"
      },
      "IsRegistered": false
    }
};

config.docsDefinitions = documents;

module.exports = config;