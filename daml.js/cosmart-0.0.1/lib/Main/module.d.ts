// Generated from Main.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type ReleasedCertificate = {
  coTemplate: CertificateOfOrigin;
  customsGua: damlTypes.Party;
  importer: damlTypes.Party;
};

export declare const ReleasedCertificate:
  damlTypes.Template<ReleasedCertificate, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:ReleasedCertificate'> & {
  Archive: damlTypes.Choice<ReleasedCertificate, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ReleasedCertificate {
  export type CreateEvent = damlLedger.CreateEvent<ReleasedCertificate, undefined, typeof ReleasedCertificate.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ReleasedCertificate, typeof ReleasedCertificate.templateId>
  export type Event = damlLedger.Event<ReleasedCertificate, undefined, typeof ReleasedCertificate.templateId>
}



export declare type SendSignatoryConfirmation = {
};

export declare const SendSignatoryConfirmation:
  damlTypes.Serializable<SendSignatoryConfirmation> & {
  }
;


export declare type RenconciliationCertificate = {
  coTemplate: CertificateOfOrigin;
  customsGua: damlTypes.Party;
  importer: damlTypes.Party;
};

export declare const RenconciliationCertificate:
  damlTypes.Template<RenconciliationCertificate, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:RenconciliationCertificate'> & {
  Archive: damlTypes.Choice<RenconciliationCertificate, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  SendSignatoryConfirmation: damlTypes.Choice<RenconciliationCertificate, SendSignatoryConfirmation, damlTypes.ContractId<ReleasedCertificate>, undefined>;
};

export declare namespace RenconciliationCertificate {
  export type CreateEvent = damlLedger.CreateEvent<RenconciliationCertificate, undefined, typeof RenconciliationCertificate.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RenconciliationCertificate, typeof RenconciliationCertificate.templateId>
  export type Event = damlLedger.Event<RenconciliationCertificate, undefined, typeof RenconciliationCertificate.templateId>
}



export declare type SendThirdConfirmation = {
  importinfo: Importinfo;
};

export declare const SendThirdConfirmation:
  damlTypes.Serializable<SendThirdConfirmation> & {
  }
;


export declare type RequestCertificate = {
  coTemplate: CertificateOfOrigin;
  customsGua: damlTypes.Party;
  importer: damlTypes.Party;
};

export declare const RequestCertificate:
  damlTypes.Template<RequestCertificate, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:RequestCertificate'> & {
  Archive: damlTypes.Choice<RequestCertificate, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  SendThirdConfirmation: damlTypes.Choice<RequestCertificate, SendThirdConfirmation, damlTypes.ContractId<RenconciliationCertificate>, undefined>;
};

export declare namespace RequestCertificate {
  export type CreateEvent = damlLedger.CreateEvent<RequestCertificate, undefined, typeof RequestCertificate.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RequestCertificate, typeof RequestCertificate.templateId>
  export type Event = damlLedger.Event<RequestCertificate, undefined, typeof RequestCertificate.templateId>
}



export declare type RequestSecondConfirmation = {
};

export declare const RequestSecondConfirmation:
  damlTypes.Serializable<RequestSecondConfirmation> & {
  }
;


export declare type ReleaseCo = {
};

export declare const ReleaseCo:
  damlTypes.Serializable<ReleaseCo> & {
  }
;


export declare type ImportDeclaration = {
  coTemplate: CertificateOfOrigin;
  customsGua: damlTypes.Party;
  importinfo: Importinfo;
  importer: damlTypes.Party;
};

export declare const ImportDeclaration:
  damlTypes.Template<ImportDeclaration, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:ImportDeclaration'> & {
  Archive: damlTypes.Choice<ImportDeclaration, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  ReleaseCo: damlTypes.Choice<ImportDeclaration, ReleaseCo, damlTypes.ContractId<ReleasedCertificate>, undefined>;
  RequestSecondConfirmation: damlTypes.Choice<ImportDeclaration, RequestSecondConfirmation, damlTypes.ContractId<RequestCertificate>, undefined>;
};

export declare namespace ImportDeclaration {
  export type CreateEvent = damlLedger.CreateEvent<ImportDeclaration, undefined, typeof ImportDeclaration.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ImportDeclaration, typeof ImportDeclaration.templateId>
  export type Event = damlLedger.Event<ImportDeclaration, undefined, typeof ImportDeclaration.templateId>
}



export declare type SendImportDeclaration = {
  customsGua: damlTypes.Party;
  importinfo: Importinfo;
};

export declare const SendImportDeclaration:
  damlTypes.Serializable<SendImportDeclaration> & {
  }
;


export declare type CoForImporter = {
  coTemplate: CertificateOfOrigin;
  importer: damlTypes.Party;
};

export declare const CoForImporter:
  damlTypes.Template<CoForImporter, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:CoForImporter'> & {
  Archive: damlTypes.Choice<CoForImporter, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  SendImportDeclaration: damlTypes.Choice<CoForImporter, SendImportDeclaration, damlTypes.ContractId<ImportDeclaration>, undefined>;
};

export declare namespace CoForImporter {
  export type CreateEvent = damlLedger.CreateEvent<CoForImporter, undefined, typeof CoForImporter.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CoForImporter, typeof CoForImporter.templateId>
  export type Event = damlLedger.Event<CoForImporter, undefined, typeof CoForImporter.templateId>
}



export declare type SendCo = {
  importer: damlTypes.Party;
};

export declare const SendCo:
  damlTypes.Serializable<SendCo> & {
  }
;


export declare type InspectCertificate = {
  coTemplate: CertificateOfOrigin;
};

export declare const InspectCertificate:
  damlTypes.Template<InspectCertificate, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:InspectCertificate'> & {
  Archive: damlTypes.Choice<InspectCertificate, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  SendCo: damlTypes.Choice<InspectCertificate, SendCo, damlTypes.ContractId<CoForImporter>, undefined>;
};

export declare namespace InspectCertificate {
  export type CreateEvent = damlLedger.CreateEvent<InspectCertificate, undefined, typeof InspectCertificate.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<InspectCertificate, typeof InspectCertificate.templateId>
  export type Event = damlLedger.Event<InspectCertificate, undefined, typeof InspectCertificate.templateId>
}



export declare type ConfirmCo = {
};

export declare const ConfirmCo:
  damlTypes.Serializable<ConfirmCo> & {
  }
;


export declare type CertificateOfOrigin = {
  exporter: damlTypes.Party;
  customsMar: damlTypes.Party;
};

export declare const CertificateOfOrigin:
  damlTypes.Template<CertificateOfOrigin, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:CertificateOfOrigin'> & {
  Archive: damlTypes.Choice<CertificateOfOrigin, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  ConfirmCo: damlTypes.Choice<CertificateOfOrigin, ConfirmCo, damlTypes.ContractId<InspectCertificate>, undefined>;
};

export declare namespace CertificateOfOrigin {
  export type CreateEvent = damlLedger.CreateEvent<CertificateOfOrigin, undefined, typeof CertificateOfOrigin.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CertificateOfOrigin, typeof CertificateOfOrigin.templateId>
  export type Event = damlLedger.Event<CertificateOfOrigin, undefined, typeof CertificateOfOrigin.templateId>
}



export declare type CreateCO = {
  coData: COData;
  customsMar: damlTypes.Party;
};

export declare const CreateCO:
  damlTypes.Serializable<CreateCO> & {
  }
;


export declare type ExporterRole = {
  operator: damlTypes.Party;
  exporter: damlTypes.Party;
};

export declare const ExporterRole:
  damlTypes.Template<ExporterRole, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:ExporterRole'> & {
  Archive: damlTypes.Choice<ExporterRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  CreateCO: damlTypes.Choice<ExporterRole, CreateCO, damlTypes.ContractId<CertificateOfOrigin>, undefined>;
};

export declare namespace ExporterRole {
  export type CreateEvent = damlLedger.CreateEvent<ExporterRole, undefined, typeof ExporterRole.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ExporterRole, typeof ExporterRole.templateId>
  export type Event = damlLedger.Event<ExporterRole, undefined, typeof ExporterRole.templateId>
}



export declare type AcceptExporterInvitation = {
};

export declare const AcceptExporterInvitation:
  damlTypes.Serializable<AcceptExporterInvitation> & {
  }
;


export declare type ExporterInvitation = {
  operator: damlTypes.Party;
  exporter: damlTypes.Party;
};

export declare const ExporterInvitation:
  damlTypes.Template<ExporterInvitation, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:ExporterInvitation'> & {
  Archive: damlTypes.Choice<ExporterInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptExporterInvitation: damlTypes.Choice<ExporterInvitation, AcceptExporterInvitation, damlTypes.ContractId<ExporterRole>, undefined>;
};

export declare namespace ExporterInvitation {
  export type CreateEvent = damlLedger.CreateEvent<ExporterInvitation, undefined, typeof ExporterInvitation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ExporterInvitation, typeof ExporterInvitation.templateId>
  export type Event = damlLedger.Event<ExporterInvitation, undefined, typeof ExporterInvitation.templateId>
}



export declare type ImporterRole = {
  operator: damlTypes.Party;
  importer: damlTypes.Party;
};

export declare const ImporterRole:
  damlTypes.Template<ImporterRole, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:ImporterRole'> & {
  Archive: damlTypes.Choice<ImporterRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ImporterRole {
  export type CreateEvent = damlLedger.CreateEvent<ImporterRole, undefined, typeof ImporterRole.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ImporterRole, typeof ImporterRole.templateId>
  export type Event = damlLedger.Event<ImporterRole, undefined, typeof ImporterRole.templateId>
}



export declare type AcceptImporterInvitation = {
};

export declare const AcceptImporterInvitation:
  damlTypes.Serializable<AcceptImporterInvitation> & {
  }
;


export declare type ImporterInvitation = {
  operator: damlTypes.Party;
  importer: damlTypes.Party;
};

export declare const ImporterInvitation:
  damlTypes.Template<ImporterInvitation, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:ImporterInvitation'> & {
  Archive: damlTypes.Choice<ImporterInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptImporterInvitation: damlTypes.Choice<ImporterInvitation, AcceptImporterInvitation, damlTypes.ContractId<ImporterRole>, undefined>;
};

export declare namespace ImporterInvitation {
  export type CreateEvent = damlLedger.CreateEvent<ImporterInvitation, undefined, typeof ImporterInvitation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ImporterInvitation, typeof ImporterInvitation.templateId>
  export type Event = damlLedger.Event<ImporterInvitation, undefined, typeof ImporterInvitation.templateId>
}



export declare type CustomsGuaRole = {
  operator: damlTypes.Party;
  customsGua: damlTypes.Party;
};

export declare const CustomsGuaRole:
  damlTypes.Template<CustomsGuaRole, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:CustomsGuaRole'> & {
  Archive: damlTypes.Choice<CustomsGuaRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace CustomsGuaRole {
  export type CreateEvent = damlLedger.CreateEvent<CustomsGuaRole, undefined, typeof CustomsGuaRole.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CustomsGuaRole, typeof CustomsGuaRole.templateId>
  export type Event = damlLedger.Event<CustomsGuaRole, undefined, typeof CustomsGuaRole.templateId>
}



export declare type AcceptCustomsGuaInvitation = {
};

export declare const AcceptCustomsGuaInvitation:
  damlTypes.Serializable<AcceptCustomsGuaInvitation> & {
  }
;


export declare type CustomsGuaInvitation = {
  operator: damlTypes.Party;
  customsGua: damlTypes.Party;
};

export declare const CustomsGuaInvitation:
  damlTypes.Template<CustomsGuaInvitation, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:CustomsGuaInvitation'> & {
  Archive: damlTypes.Choice<CustomsGuaInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptCustomsGuaInvitation: damlTypes.Choice<CustomsGuaInvitation, AcceptCustomsGuaInvitation, damlTypes.ContractId<CustomsGuaRole>, undefined>;
};

export declare namespace CustomsGuaInvitation {
  export type CreateEvent = damlLedger.CreateEvent<CustomsGuaInvitation, undefined, typeof CustomsGuaInvitation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CustomsGuaInvitation, typeof CustomsGuaInvitation.templateId>
  export type Event = damlLedger.Event<CustomsGuaInvitation, undefined, typeof CustomsGuaInvitation.templateId>
}



export declare type CustomsMarRole = {
  operator: damlTypes.Party;
  customsMar: damlTypes.Party;
};

export declare const CustomsMarRole:
  damlTypes.Template<CustomsMarRole, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:CustomsMarRole'> & {
  Archive: damlTypes.Choice<CustomsMarRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace CustomsMarRole {
  export type CreateEvent = damlLedger.CreateEvent<CustomsMarRole, undefined, typeof CustomsMarRole.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CustomsMarRole, typeof CustomsMarRole.templateId>
  export type Event = damlLedger.Event<CustomsMarRole, undefined, typeof CustomsMarRole.templateId>
}



export declare type AcceptCustomsMarInvitation = {
};

export declare const AcceptCustomsMarInvitation:
  damlTypes.Serializable<AcceptCustomsMarInvitation> & {
  }
;


export declare type CustomsMarInvitation = {
  operator: damlTypes.Party;
  customsMar: damlTypes.Party;
};

export declare const CustomsMarInvitation:
  damlTypes.Template<CustomsMarInvitation, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:CustomsMarInvitation'> & {
  Archive: damlTypes.Choice<CustomsMarInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptCustomsMarInvitation: damlTypes.Choice<CustomsMarInvitation, AcceptCustomsMarInvitation, damlTypes.ContractId<CustomsMarRole>, undefined>;
};

export declare namespace CustomsMarInvitation {
  export type CreateEvent = damlLedger.CreateEvent<CustomsMarInvitation, undefined, typeof CustomsMarInvitation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CustomsMarInvitation, typeof CustomsMarInvitation.templateId>
  export type Event = damlLedger.Event<CustomsMarInvitation, undefined, typeof CustomsMarInvitation.templateId>
}



export declare type InviteCustomsGua = {
  customsGua: damlTypes.Party;
};

export declare const InviteCustomsGua:
  damlTypes.Serializable<InviteCustomsGua> & {
  }
;


export declare type InviteImporter = {
  importer: damlTypes.Party;
};

export declare const InviteImporter:
  damlTypes.Serializable<InviteImporter> & {
  }
;


export declare type InviteExporter = {
  exporter: damlTypes.Party;
};

export declare const InviteExporter:
  damlTypes.Serializable<InviteExporter> & {
  }
;


export declare type InviteCustomsMar = {
  customsMar: damlTypes.Party;
};

export declare const InviteCustomsMar:
  damlTypes.Serializable<InviteCustomsMar> & {
  }
;


export declare type Network = {
  operator: damlTypes.Party;
};

export declare const Network:
  damlTypes.Template<Network, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:Network'> & {
  Archive: damlTypes.Choice<Network, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  InviteCustomsMar: damlTypes.Choice<Network, InviteCustomsMar, damlTypes.ContractId<CustomsMarInvitation>, undefined>;
  InviteExporter: damlTypes.Choice<Network, InviteExporter, damlTypes.ContractId<ExporterInvitation>, undefined>;
  InviteImporter: damlTypes.Choice<Network, InviteImporter, damlTypes.ContractId<ImporterInvitation>, undefined>;
  InviteCustomsGua: damlTypes.Choice<Network, InviteCustomsGua, damlTypes.ContractId<CustomsGuaInvitation>, undefined>;
};

export declare namespace Network {
  export type CreateEvent = damlLedger.CreateEvent<Network, undefined, typeof Network.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Network, typeof Network.templateId>
  export type Event = damlLedger.Event<Network, undefined, typeof Network.templateId>
}



export declare type Announcement = {
  user: damlTypes.Party;
};

export declare const Announcement:
  damlTypes.Template<Announcement, undefined, 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:Announcement'> & {
  Archive: damlTypes.Choice<Announcement, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace Announcement {
  export type CreateEvent = damlLedger.CreateEvent<Announcement, undefined, typeof Announcement.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Announcement, typeof Announcement.templateId>
  export type Event = damlLedger.Event<Announcement, undefined, typeof Announcement.templateId>
}



export declare type COData = {
  ref: string;
  originCountry: string;
  destinationCountry: string;
  goods: string;
  itemRef: string;
  transportInfo: string;
  certificateContent: string;
};

export declare const COData:
  damlTypes.Serializable<COData> & {
  }
;


export declare type Importinfo = {
  quantity: damlTypes.Int;
  value: damlTypes.Numeric;
};

export declare const Importinfo:
  damlTypes.Serializable<Importinfo> & {
  }
;

