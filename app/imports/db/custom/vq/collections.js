import { Mongo } from 'meteor/mongo';
 
// Custom collections
/*
Associations = new Mongo.Collection("Associations");
Attributes = new Mongo.Collection("Attributes");
Classes = new Mongo.Collection("Classes");
Schema = new Mongo.Collection("Schema");
TriplesMaps = new Mongo.Collection("TriplesMaps");
*/
const Services = new Mongo.Collection("Services");

const VQ_sparql_logs = new Mongo.Collection("VQ_Exec_SPARQL_Logs");

export {
	// Associations,
	// Attributes,
	// Classes,
	// Schema,
	// TriplesMaps,
	Services,
  VQ_sparql_logs,
}