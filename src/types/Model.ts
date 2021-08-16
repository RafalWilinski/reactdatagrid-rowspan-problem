export interface Model {
  ModelName: string;
  ModelMetadata: ModelMetadata;
  DataModel: DataModel[];
  ModelSchema: ModelSchema;
}

export interface ModelMetadata {
  Author: string;
  DateCreated: string;
  DateLastModified: string;
  Description: string;
  AWSService: string;
  Version: string;
}

export interface DataModel {
  TableName: string;
  KeyAttributes: KeyAttributes;
  NonKeyAttributes: NonKeyAttribute[];
  GlobalSecondaryIndexes: GlobalSecondaryIndex[];
  TableData: TableDaum[];
}

export interface KeyAttributes {
  PartitionKey: PartitionKey;
  SortKey: SortKey;
}

export interface Attribute {
  AttributeName: string;
  AttributeType: string;
}

export interface PartitionKey extends Attribute {}
export interface SortKey extends Attribute {}
export interface NonKeyAttribute extends Attribute {}

export interface GlobalSecondaryIndex {
  IndexName: string;
  KeyAttributes: KeyAttributes;
  Projection: Projection;
}

export interface Projection {
  ProjectionType: string;
}

export interface TableDaum {
  PK: Pk;
  SK: Sk;
  type: Type;
}

export interface Pk {
  S: string;
}

export interface Sk {
  S: string;
}

export interface Type {
  S: string;
}

export interface ModelSchema {
  indexes: Indexes;
  models: Models;
}

export interface Indexes {
  primary: PrimaryIndex;
  GSI1: GSI;
  GSI2: GSI;
  GSI3: GSI;
  GSI4: GSI;
}

export interface PrimaryIndex {
  hash: string;
  sort: string;
}

export interface GSI extends PrimaryIndex {
  projection: string;
}

export interface Models {
  patient: Patient;
}

//----------- to be handled properly

export interface Patient {
  type: Type2;
  PK: Pk2;
  SK: Sk2;
}

export interface Type2 {
  type: string;
}

export interface Pk2 {
  type: string;
}

export interface Sk2 {
  type: string;
}
