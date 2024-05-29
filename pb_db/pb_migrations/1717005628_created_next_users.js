/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y7q6rbqfiiyrlv6",
    "created": "2024-05-29 18:00:28.490Z",
    "updated": "2024-05-29 18:00:28.490Z",
    "name": "next_users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "elarckk5",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ouufjqnm",
        "name": "email",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5qcknoyl",
        "name": "password",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_qYaJogL` ON `next_users` (\n  `name`,\n  `email`\n)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y7q6rbqfiiyrlv6");

  return dao.deleteCollection(collection);
})
