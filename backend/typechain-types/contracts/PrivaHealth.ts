/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace PrivaHealth {
  export type DoctorReviewStruct = {
    id: BigNumberish;
    review: string;
    timestamp: BigNumberish;
  };

  export type DoctorReviewStructOutput = [
    id: bigint,
    review: string,
    timestamp: bigint
  ] & { id: bigint; review: string; timestamp: bigint };

  export type PatientInfoStruct = {
    patientAddress: AddressLike;
    name: string;
    dateOfBirth: BigNumberish;
    gender: string;
    contactInfoHash: string;
    emergencyContactHash: string;
    medicalRecord: string;
    currentMedications: string;
    allergies: string;
    bloodType: string;
  };

  export type PatientInfoStructOutput = [
    patientAddress: string,
    name: string,
    dateOfBirth: bigint,
    gender: string,
    contactInfoHash: string,
    emergencyContactHash: string,
    medicalRecord: string,
    currentMedications: string,
    allergies: string,
    bloodType: string
  ] & {
    patientAddress: string;
    name: string;
    dateOfBirth: bigint;
    gender: string;
    contactInfoHash: string;
    emergencyContactHash: string;
    medicalRecord: string;
    currentMedications: string;
    allergies: string;
    bloodType: string;
  };
}

export interface PrivaHealthInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addDoctorReview"
      | "addPatientRecord"
      | "approveCorePatinetInfoUpdate"
      | "authorizeDoctor"
      | "authorizeHealthCenter"
      | "authorizedHealthCenters"
      | "dataSharingArray"
      | "getDataSharingStatus"
      | "getDoctorReviews"
      | "getPatientRecords"
      | "getSensitivePatientData"
      | "getWhetherPatientInitialized"
      | "initializePatient"
      | "initializedPatients"
      | "owner"
      | "patientDoctorReviews"
      | "patients"
      | "pendingCoreUpdates"
      | "renounceOwnership"
      | "requestCorePatientInfoUpdate"
      | "revokeDoctor"
      | "revokeHealthCenter"
      | "setDataSharing"
      | "setHealthCenterAuthorization"
      | "transferOwnership"
      | "updatePatientRecord"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CorePatientInfoUpdateRequested"
      | "CorePatientInfoUpdated"
      | "DataSharingChanged"
      | "HealthCenterAuthorizationChanged"
      | "OwnershipTransferred"
      | "PatientInitialized"
      | "PatientRecordAdded"
      | "PatientRecordUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addDoctorReview",
    values: [AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addPatientRecord",
    values: [
      AddressLike,
      string,
      BigNumberish,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "approveCorePatinetInfoUpdate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizeDoctor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizeHealthCenter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizedHealthCenters",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "dataSharingArray",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDataSharingStatus",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDoctorReviews",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPatientRecords",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSensitivePatientData",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getWhetherPatientInitialized",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initializePatient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializedPatients",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "patientDoctorReviews",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "patients",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingCoreUpdates",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestCorePatientInfoUpdate",
    values: [string, BigNumberish, string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeDoctor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeHealthCenter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDataSharing",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setHealthCenterAuthorization",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePatientRecord",
    values: [AddressLike, string, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addDoctorReview",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addPatientRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveCorePatinetInfoUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizeDoctor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizeHealthCenter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizedHealthCenters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dataSharingArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDataSharingStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDoctorReviews",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPatientRecords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSensitivePatientData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhetherPatientInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializePatient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializedPatients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "patientDoctorReviews",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "patients", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingCoreUpdates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestCorePatientInfoUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeDoctor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeHealthCenter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDataSharing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setHealthCenterAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePatientRecord",
    data: BytesLike
  ): Result;
}

export namespace CorePatientInfoUpdateRequestedEvent {
  export type InputTuple = [patientAddress: AddressLike];
  export type OutputTuple = [patientAddress: string];
  export interface OutputObject {
    patientAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CorePatientInfoUpdatedEvent {
  export type InputTuple = [patientAddress: AddressLike];
  export type OutputTuple = [patientAddress: string];
  export interface OutputObject {
    patientAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DataSharingChangedEvent {
  export type InputTuple = [patientAddress: AddressLike, isEnabled: boolean];
  export type OutputTuple = [patientAddress: string, isEnabled: boolean];
  export interface OutputObject {
    patientAddress: string;
    isEnabled: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace HealthCenterAuthorizationChangedEvent {
  export type InputTuple = [healthCenter: AddressLike, isAuthorized: boolean];
  export type OutputTuple = [healthCenter: string, isAuthorized: boolean];
  export interface OutputObject {
    healthCenter: string;
    isAuthorized: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PatientInitializedEvent {
  export type InputTuple = [patientAddress: AddressLike];
  export type OutputTuple = [patientAddress: string];
  export interface OutputObject {
    patientAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PatientRecordAddedEvent {
  export type InputTuple = [patientAddress: AddressLike];
  export type OutputTuple = [patientAddress: string];
  export interface OutputObject {
    patientAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PatientRecordUpdatedEvent {
  export type InputTuple = [patientAddress: AddressLike];
  export type OutputTuple = [patientAddress: string];
  export interface OutputObject {
    patientAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PrivaHealth extends BaseContract {
  connect(runner?: ContractRunner | null): PrivaHealth;
  waitForDeployment(): Promise<this>;

  interface: PrivaHealthInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addDoctorReview: TypedContractMethod<
    [_patientAddress: AddressLike, _review: string],
    [void],
    "nonpayable"
  >;

  addPatientRecord: TypedContractMethod<
    [
      _patientAddress: AddressLike,
      _name: string,
      _dateOfBirth: BigNumberish,
      _gender: string,
      _contactInfoHash: string,
      _emergencyContactHash: string,
      _medicalRecord: string,
      _currentMedications: string,
      _allergies: string,
      _bloodType: string
    ],
    [void],
    "nonpayable"
  >;

  approveCorePatinetInfoUpdate: TypedContractMethod<
    [_patientAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  authorizeDoctor: TypedContractMethod<
    [_doctorAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  authorizeHealthCenter: TypedContractMethod<
    [_healthCenterAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  authorizedHealthCenters: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  dataSharingArray: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  getDataSharingStatus: TypedContractMethod<
    [_patientAddress: AddressLike],
    [boolean],
    "view"
  >;

  getDoctorReviews: TypedContractMethod<
    [_patientAddress: AddressLike],
    [PrivaHealth.DoctorReviewStructOutput[]],
    "view"
  >;

  getPatientRecords: TypedContractMethod<
    [],
    [PrivaHealth.PatientInfoStructOutput[]],
    "view"
  >;

  getSensitivePatientData: TypedContractMethod<
    [_patientAddress: AddressLike],
    [
      [
        string,
        bigint,
        string,
        string,
        bigint,
        boolean,
        string,
        string,
        string
      ] & {
        name: string;
        dateOfBirth: bigint;
        gender: string;
        bloodType: string;
        lastUpdated: bigint;
        dataSharing: boolean;
        medicalRecord: string;
        currentMedications: string;
        allergies: string;
      }
    ],
    "view"
  >;

  getWhetherPatientInitialized: TypedContractMethod<
    [_patientAddress: AddressLike],
    [boolean],
    "view"
  >;

  initializePatient: TypedContractMethod<[], [void], "nonpayable">;

  initializedPatients: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  patientDoctorReviews: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [bigint, string, bigint] & {
        id: bigint;
        review: string;
        timestamp: bigint;
      }
    ],
    "view"
  >;

  patients: TypedContractMethod<
    [arg0: AddressLike],
    [
      [
        string,
        bigint,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        bigint,
        boolean
      ] & {
        name: string;
        dateOfBirth: bigint;
        gender: string;
        contactInfoHash: string;
        emergencyContactHash: string;
        medicalRecord: string;
        currentMedications: string;
        allergies: string;
        bloodType: string;
        lastUpdated: bigint;
        dataSharing: boolean;
      }
    ],
    "view"
  >;

  pendingCoreUpdates: TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, bigint, string, string, string, string, boolean, boolean] & {
        name: string;
        dateOfBirth: bigint;
        gender: string;
        contactInfoHash: string;
        emergencyContactHash: string;
        bloodType: string;
        patientApproved: boolean;
        ownerApproved: boolean;
      }
    ],
    "view"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  requestCorePatientInfoUpdate: TypedContractMethod<
    [
      _name: string,
      _dateOfBirth: BigNumberish,
      _gender: string,
      _contactInfoHash: string,
      _emergencyContactHash: string,
      _bloodType: string
    ],
    [void],
    "nonpayable"
  >;

  revokeDoctor: TypedContractMethod<
    [_doctorAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeHealthCenter: TypedContractMethod<
    [_healthCenterAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  setDataSharing: TypedContractMethod<
    [_allowSharing: boolean],
    [void],
    "nonpayable"
  >;

  setHealthCenterAuthorization: TypedContractMethod<
    [_healthCenter: AddressLike, _isAuthorized: boolean],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  updatePatientRecord: TypedContractMethod<
    [
      _patientAddress: AddressLike,
      _medicalRecord: string,
      _currentMedications: string,
      _allergies: string
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addDoctorReview"
  ): TypedContractMethod<
    [_patientAddress: AddressLike, _review: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addPatientRecord"
  ): TypedContractMethod<
    [
      _patientAddress: AddressLike,
      _name: string,
      _dateOfBirth: BigNumberish,
      _gender: string,
      _contactInfoHash: string,
      _emergencyContactHash: string,
      _medicalRecord: string,
      _currentMedications: string,
      _allergies: string,
      _bloodType: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "approveCorePatinetInfoUpdate"
  ): TypedContractMethod<[_patientAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "authorizeDoctor"
  ): TypedContractMethod<[_doctorAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "authorizeHealthCenter"
  ): TypedContractMethod<
    [_healthCenterAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "authorizedHealthCenters"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "dataSharingArray"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getDataSharingStatus"
  ): TypedContractMethod<[_patientAddress: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "getDoctorReviews"
  ): TypedContractMethod<
    [_patientAddress: AddressLike],
    [PrivaHealth.DoctorReviewStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPatientRecords"
  ): TypedContractMethod<[], [PrivaHealth.PatientInfoStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getSensitivePatientData"
  ): TypedContractMethod<
    [_patientAddress: AddressLike],
    [
      [
        string,
        bigint,
        string,
        string,
        bigint,
        boolean,
        string,
        string,
        string
      ] & {
        name: string;
        dateOfBirth: bigint;
        gender: string;
        bloodType: string;
        lastUpdated: bigint;
        dataSharing: boolean;
        medicalRecord: string;
        currentMedications: string;
        allergies: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getWhetherPatientInitialized"
  ): TypedContractMethod<[_patientAddress: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "initializePatient"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "initializedPatients"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "patientDoctorReviews"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [bigint, string, bigint] & {
        id: bigint;
        review: string;
        timestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "patients"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [
        string,
        bigint,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        bigint,
        boolean
      ] & {
        name: string;
        dateOfBirth: bigint;
        gender: string;
        contactInfoHash: string;
        emergencyContactHash: string;
        medicalRecord: string;
        currentMedications: string;
        allergies: string;
        bloodType: string;
        lastUpdated: bigint;
        dataSharing: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "pendingCoreUpdates"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, bigint, string, string, string, string, boolean, boolean] & {
        name: string;
        dateOfBirth: bigint;
        gender: string;
        contactInfoHash: string;
        emergencyContactHash: string;
        bloodType: string;
        patientApproved: boolean;
        ownerApproved: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "requestCorePatientInfoUpdate"
  ): TypedContractMethod<
    [
      _name: string,
      _dateOfBirth: BigNumberish,
      _gender: string,
      _contactInfoHash: string,
      _emergencyContactHash: string,
      _bloodType: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeDoctor"
  ): TypedContractMethod<[_doctorAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "revokeHealthCenter"
  ): TypedContractMethod<
    [_healthCenterAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setDataSharing"
  ): TypedContractMethod<[_allowSharing: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setHealthCenterAuthorization"
  ): TypedContractMethod<
    [_healthCenter: AddressLike, _isAuthorized: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updatePatientRecord"
  ): TypedContractMethod<
    [
      _patientAddress: AddressLike,
      _medicalRecord: string,
      _currentMedications: string,
      _allergies: string
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "CorePatientInfoUpdateRequested"
  ): TypedContractEvent<
    CorePatientInfoUpdateRequestedEvent.InputTuple,
    CorePatientInfoUpdateRequestedEvent.OutputTuple,
    CorePatientInfoUpdateRequestedEvent.OutputObject
  >;
  getEvent(
    key: "CorePatientInfoUpdated"
  ): TypedContractEvent<
    CorePatientInfoUpdatedEvent.InputTuple,
    CorePatientInfoUpdatedEvent.OutputTuple,
    CorePatientInfoUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "DataSharingChanged"
  ): TypedContractEvent<
    DataSharingChangedEvent.InputTuple,
    DataSharingChangedEvent.OutputTuple,
    DataSharingChangedEvent.OutputObject
  >;
  getEvent(
    key: "HealthCenterAuthorizationChanged"
  ): TypedContractEvent<
    HealthCenterAuthorizationChangedEvent.InputTuple,
    HealthCenterAuthorizationChangedEvent.OutputTuple,
    HealthCenterAuthorizationChangedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "PatientInitialized"
  ): TypedContractEvent<
    PatientInitializedEvent.InputTuple,
    PatientInitializedEvent.OutputTuple,
    PatientInitializedEvent.OutputObject
  >;
  getEvent(
    key: "PatientRecordAdded"
  ): TypedContractEvent<
    PatientRecordAddedEvent.InputTuple,
    PatientRecordAddedEvent.OutputTuple,
    PatientRecordAddedEvent.OutputObject
  >;
  getEvent(
    key: "PatientRecordUpdated"
  ): TypedContractEvent<
    PatientRecordUpdatedEvent.InputTuple,
    PatientRecordUpdatedEvent.OutputTuple,
    PatientRecordUpdatedEvent.OutputObject
  >;

  filters: {
    "CorePatientInfoUpdateRequested(address)": TypedContractEvent<
      CorePatientInfoUpdateRequestedEvent.InputTuple,
      CorePatientInfoUpdateRequestedEvent.OutputTuple,
      CorePatientInfoUpdateRequestedEvent.OutputObject
    >;
    CorePatientInfoUpdateRequested: TypedContractEvent<
      CorePatientInfoUpdateRequestedEvent.InputTuple,
      CorePatientInfoUpdateRequestedEvent.OutputTuple,
      CorePatientInfoUpdateRequestedEvent.OutputObject
    >;

    "CorePatientInfoUpdated(address)": TypedContractEvent<
      CorePatientInfoUpdatedEvent.InputTuple,
      CorePatientInfoUpdatedEvent.OutputTuple,
      CorePatientInfoUpdatedEvent.OutputObject
    >;
    CorePatientInfoUpdated: TypedContractEvent<
      CorePatientInfoUpdatedEvent.InputTuple,
      CorePatientInfoUpdatedEvent.OutputTuple,
      CorePatientInfoUpdatedEvent.OutputObject
    >;

    "DataSharingChanged(address,bool)": TypedContractEvent<
      DataSharingChangedEvent.InputTuple,
      DataSharingChangedEvent.OutputTuple,
      DataSharingChangedEvent.OutputObject
    >;
    DataSharingChanged: TypedContractEvent<
      DataSharingChangedEvent.InputTuple,
      DataSharingChangedEvent.OutputTuple,
      DataSharingChangedEvent.OutputObject
    >;

    "HealthCenterAuthorizationChanged(address,bool)": TypedContractEvent<
      HealthCenterAuthorizationChangedEvent.InputTuple,
      HealthCenterAuthorizationChangedEvent.OutputTuple,
      HealthCenterAuthorizationChangedEvent.OutputObject
    >;
    HealthCenterAuthorizationChanged: TypedContractEvent<
      HealthCenterAuthorizationChangedEvent.InputTuple,
      HealthCenterAuthorizationChangedEvent.OutputTuple,
      HealthCenterAuthorizationChangedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "PatientInitialized(address)": TypedContractEvent<
      PatientInitializedEvent.InputTuple,
      PatientInitializedEvent.OutputTuple,
      PatientInitializedEvent.OutputObject
    >;
    PatientInitialized: TypedContractEvent<
      PatientInitializedEvent.InputTuple,
      PatientInitializedEvent.OutputTuple,
      PatientInitializedEvent.OutputObject
    >;

    "PatientRecordAdded(address)": TypedContractEvent<
      PatientRecordAddedEvent.InputTuple,
      PatientRecordAddedEvent.OutputTuple,
      PatientRecordAddedEvent.OutputObject
    >;
    PatientRecordAdded: TypedContractEvent<
      PatientRecordAddedEvent.InputTuple,
      PatientRecordAddedEvent.OutputTuple,
      PatientRecordAddedEvent.OutputObject
    >;

    "PatientRecordUpdated(address)": TypedContractEvent<
      PatientRecordUpdatedEvent.InputTuple,
      PatientRecordUpdatedEvent.OutputTuple,
      PatientRecordUpdatedEvent.OutputObject
    >;
    PatientRecordUpdated: TypedContractEvent<
      PatientRecordUpdatedEvent.InputTuple,
      PatientRecordUpdatedEvent.OutputTuple,
      PatientRecordUpdatedEvent.OutputObject
    >;
  };
}
