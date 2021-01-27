"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');


exports.ReleasedCertificate = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:ReleasedCertificate',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({coTemplate: exports.CertificateOfOrigin.decoder, customsGua: damlTypes.Party.decoder, importer: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.ReleasedCertificate; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
};


damlTypes.registerTemplate(exports.ReleasedCertificate);



exports.SendSignatoryConfirmation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.RenconciliationCertificate = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:RenconciliationCertificate',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({coTemplate: exports.CertificateOfOrigin.decoder, customsGua: damlTypes.Party.decoder, importer: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.RenconciliationCertificate; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  SendSignatoryConfirmation: {
    template: function () { return exports.RenconciliationCertificate; },
    choiceName: 'SendSignatoryConfirmation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SendSignatoryConfirmation.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ReleasedCertificate).decoder; }),
  },
};


damlTypes.registerTemplate(exports.RenconciliationCertificate);



exports.SendThirdConfirmation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({importinfo: exports.Importinfo.decoder, }); }),
};



exports.RequestCertificate = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:RequestCertificate',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({coTemplate: exports.CertificateOfOrigin.decoder, customsGua: damlTypes.Party.decoder, importer: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.RequestCertificate; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  SendThirdConfirmation: {
    template: function () { return exports.RequestCertificate; },
    choiceName: 'SendThirdConfirmation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SendThirdConfirmation.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RenconciliationCertificate).decoder; }),
  },
};


damlTypes.registerTemplate(exports.RequestCertificate);



exports.RequestSecondConfirmation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.ReleaseCo = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.ImportDeclaration = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:ImportDeclaration',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({coTemplate: exports.CertificateOfOrigin.decoder, customsGua: damlTypes.Party.decoder, importinfo: exports.Importinfo.decoder, importer: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.ImportDeclaration; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  ReleaseCo: {
    template: function () { return exports.ImportDeclaration; },
    choiceName: 'ReleaseCo',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ReleaseCo.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ReleasedCertificate).decoder; }),
  },
  RequestSecondConfirmation: {
    template: function () { return exports.ImportDeclaration; },
    choiceName: 'RequestSecondConfirmation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestSecondConfirmation.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RequestCertificate).decoder; }),
  },
};


damlTypes.registerTemplate(exports.ImportDeclaration);



exports.SendImportDeclaration = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({customsGua: damlTypes.Party.decoder, importinfo: exports.Importinfo.decoder, }); }),
};



exports.CoForImporter = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:CoForImporter',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({coTemplate: exports.CertificateOfOrigin.decoder, importer: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.CoForImporter; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  SendImportDeclaration: {
    template: function () { return exports.CoForImporter; },
    choiceName: 'SendImportDeclaration',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SendImportDeclaration.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ImportDeclaration).decoder; }),
  },
};


damlTypes.registerTemplate(exports.CoForImporter);



exports.SendCo = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({importer: damlTypes.Party.decoder, }); }),
};



exports.InspectCertificate = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:InspectCertificate',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({coTemplate: exports.CertificateOfOrigin.decoder, }); }),
  Archive: {
    template: function () { return exports.InspectCertificate; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  SendCo: {
    template: function () { return exports.InspectCertificate; },
    choiceName: 'SendCo',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SendCo.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.CoForImporter).decoder; }),
  },
};


damlTypes.registerTemplate(exports.InspectCertificate);



exports.ConfirmCo = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.CertificateOfOrigin = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:CertificateOfOrigin',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({exporter: damlTypes.Party.decoder, customsMar: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.CertificateOfOrigin; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  ConfirmCo: {
    template: function () { return exports.CertificateOfOrigin; },
    choiceName: 'ConfirmCo',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ConfirmCo.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.InspectCertificate).decoder; }),
  },
};


damlTypes.registerTemplate(exports.CertificateOfOrigin);



exports.CreateCO = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({coData: exports.COData.decoder, customsMar: damlTypes.Party.decoder, }); }),
};



exports.ExporterRole = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:ExporterRole',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, exporter: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.ExporterRole; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  CreateCO: {
    template: function () { return exports.ExporterRole; },
    choiceName: 'CreateCO',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateCO.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.CertificateOfOrigin).decoder; }),
  },
};


damlTypes.registerTemplate(exports.ExporterRole);



exports.AcceptExporterInvitation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.ExporterInvitation = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:ExporterInvitation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, exporter: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.ExporterInvitation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  AcceptExporterInvitation: {
    template: function () { return exports.ExporterInvitation; },
    choiceName: 'AcceptExporterInvitation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptExporterInvitation.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ExporterRole).decoder; }),
  },
};


damlTypes.registerTemplate(exports.ExporterInvitation);



exports.ImporterRole = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:ImporterRole',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, importer: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.ImporterRole; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
};


damlTypes.registerTemplate(exports.ImporterRole);



exports.AcceptImporterInvitation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.ImporterInvitation = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:ImporterInvitation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, importer: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.ImporterInvitation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  AcceptImporterInvitation: {
    template: function () { return exports.ImporterInvitation; },
    choiceName: 'AcceptImporterInvitation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptImporterInvitation.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ImporterRole).decoder; }),
  },
};


damlTypes.registerTemplate(exports.ImporterInvitation);



exports.CustomsGuaRole = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:CustomsGuaRole',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, customsGua: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.CustomsGuaRole; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
};


damlTypes.registerTemplate(exports.CustomsGuaRole);



exports.AcceptCustomsGuaInvitation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.CustomsGuaInvitation = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:CustomsGuaInvitation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, customsGua: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.CustomsGuaInvitation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  AcceptCustomsGuaInvitation: {
    template: function () { return exports.CustomsGuaInvitation; },
    choiceName: 'AcceptCustomsGuaInvitation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptCustomsGuaInvitation.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.CustomsGuaRole).decoder; }),
  },
};


damlTypes.registerTemplate(exports.CustomsGuaInvitation);



exports.CustomsMarRole = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:CustomsMarRole',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, customsMar: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.CustomsMarRole; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
};


damlTypes.registerTemplate(exports.CustomsMarRole);



exports.AcceptCustomsMarInvitation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
};



exports.CustomsMarInvitation = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:CustomsMarInvitation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, customsMar: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.CustomsMarInvitation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  AcceptCustomsMarInvitation: {
    template: function () { return exports.CustomsMarInvitation; },
    choiceName: 'AcceptCustomsMarInvitation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptCustomsMarInvitation.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.CustomsMarRole).decoder; }),
  },
};


damlTypes.registerTemplate(exports.CustomsMarInvitation);



exports.InviteCustomsGua = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({customsGua: damlTypes.Party.decoder, }); }),
};



exports.InviteImporter = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({importer: damlTypes.Party.decoder, }); }),
};



exports.InviteExporter = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({exporter: damlTypes.Party.decoder, }); }),
};



exports.InviteCustomsMar = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({customsMar: damlTypes.Party.decoder, }); }),
};



exports.Network = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:Network',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.Network; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
  InviteCustomsMar: {
    template: function () { return exports.Network; },
    choiceName: 'InviteCustomsMar',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InviteCustomsMar.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.CustomsMarInvitation).decoder; }),
  },
  InviteExporter: {
    template: function () { return exports.Network; },
    choiceName: 'InviteExporter',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InviteExporter.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ExporterInvitation).decoder; }),
  },
  InviteImporter: {
    template: function () { return exports.Network; },
    choiceName: 'InviteImporter',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InviteImporter.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ImporterInvitation).decoder; }),
  },
  InviteCustomsGua: {
    template: function () { return exports.Network; },
    choiceName: 'InviteCustomsGua',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InviteCustomsGua.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.CustomsGuaInvitation).decoder; }),
  },
};


damlTypes.registerTemplate(exports.Network);



exports.Announcement = {
  templateId: 'e6fa0f3daff63230e390ab7d3dc00e886e499d8c4c62a62058dc4b756ee3e4ac:Main:Announcement',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  decoder: damlTypes.lazyMemo(function () { return jtv.object({user: damlTypes.Party.decoder, }); }),
  Archive: {
    template: function () { return exports.Announcement; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
  },
};


damlTypes.registerTemplate(exports.Announcement);



exports.COData = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({ref: damlTypes.Text.decoder, originCountry: damlTypes.Text.decoder, destinationCountry: damlTypes.Text.decoder, goods: damlTypes.Text.decoder, itemRef: damlTypes.Text.decoder, transportInfo: damlTypes.Text.decoder, certificateContent: damlTypes.Text.decoder, }); }),
};



exports.Importinfo = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({quantity: damlTypes.Int.decoder, value: damlTypes.Numeric(10).decoder, }); }),
};

