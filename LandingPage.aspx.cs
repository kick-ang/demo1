using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Web.Services;
using DemoProject_Template_DU;
using Newtonsoft.Json;
using MongoDB.Bson;
using System.Web.Script.Services;
using DemoProject_Template_DU.DbUtilityDB;

namespace DemoProject_Template_DU
{
    public partial class LandingPage : System.Web.UI.Page
    {

        #region Private Variables
        static DbUtility oDAL = new DbUtility();
        static string sResult = string.Empty;
        #endregion

        #region WebMethods
        [WebMethod]
        [ScriptMethod(UseHttpGet = true)]
        public static string getAllCars()
        {
            return oDAL.GetAllDocumentsWithObjectId("Cars");
        }

        [WebMethod]
        public static bool saveCars(string carObj)
        {
            return oDAL.SaveDocument(carObj, "Cars");

        }
        [WebMethod]
        public static string findCarsById(string cid)
        {
            return oDAL.GetDocumentByIdWithObjectId("Cars", "_id", ObjectId.Parse(cid));
        }
        [WebMethod]
        public static bool editCar(string carObj)
        {
            return oDAL.UpdateDocumentByObjectId(carObj, "Cars");

        }
        [WebMethod]
        public static bool delete(string cid)
        {
            return oDAL.DeleteDocumentByObjectId("Cars", ObjectId.Parse(cid));
        }


        [WebMethod]
        public static bool SyncAll(string carObjfromlocal)
        {
            //var client = new MongoClient("mongodb://localhost:27017");
            //var server = client.GetServer();
            //var database = server.GetDatabase(DBName);
            //var collection = database.GetCollection<BsonArray>(CollectioName);

            //collection.RemoveAll();
            //var netxMessageBatch = BsonSerializer.Deserialize<BsonArray>(set);
            //collection.InsertBatch(netxMessageBatch);

            return oDAL.SaveDocumentBsonArray(carObjfromlocal, "Cars");


            //var collection1 = database.GetCollection<BsonDocument>(CollectioName);
            //MongoCursor<BsonDocument> cursor = collection1.FindAll();
            //List<BsonDocument> entities = cursor.ToList();
            //JavaScriptSerializer Json = new JavaScriptSerializer();
            //string returnDocs = Json.Serialize(entities);

        }


        #endregion  

    }
}




