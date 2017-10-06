const models = module.exports = [
require('./models/tradle.APIBasedVerificationMethod_Wealth.json'),
require('./models/tradle.API_Wealth.json'),
require('./models/tradle.Ack.json'),
require('./models/tradle.AppState.json'),
require('./models/tradle.Application.json'),
require('./models/tradle.ApplicationApproval.json'),
require('./models/tradle.ApplicationDenial.json'),
require('./models/tradle.ApplicationSubmitted.json'),
require('./models/tradle.Aspect.json'),
require('./models/tradle.AssignRelationshipManager.json'),
require('./models/tradle.BasicContactInfo.json'),
require('./models/tradle.BetaTesterContactInfo.json'),
require('./models/tradle.Bookmark.json'),
require('./models/tradle.ConfirmPackageRequest.json'),
require('./models/tradle.Confirmation.json'),
require('./models/tradle.Context.json'),
require('./models/tradle.Country.json'),
require('./models/tradle.CreditCards.json'),
require('./models/tradle.Currency.json'),
require('./models/tradle.CustomerWaiting.json'),
require('./models/tradle.Document.json'),
require('./models/tradle.Education.json'),
require('./models/tradle.EducationDegree.json'),
require('./models/tradle.EducationNL.json'),
require('./models/tradle.EmailAddress.json'),
require('./models/tradle.EmployeeOnboarding.json'),
require('./models/tradle.Enum.json'),
require('./models/tradle.File.json'),
require('./models/tradle.FinancialProduct.json'),
require('./models/tradle.ForgetMe.json'),
require('./models/tradle.ForgotYou.json'),
require('./models/tradle.Form.json'),
require('./models/tradle.FormError.json'),
require('./models/tradle.FormRequest.json'),
require('./models/tradle.GuestSessionProof.json'),
require('./models/tradle.HandSignature.json'),
require('./models/tradle.HowToFund.json'),
require('./models/tradle.Identity.json'),
require('./models/tradle.IdentityPublishRequest.json'),
require('./models/tradle.Introduction.json'),
require('./models/tradle.Item.json'),
require('./models/tradle.Language.json'),
require('./models/tradle.Major.json'),
require('./models/tradle.MaritalStatus.json'),
require('./models/tradle.MediaSnippet.json'),
require('./models/tradle.MerkleLeaf.json'),
require('./models/tradle.MerkleNode.json'),
require('./models/tradle.Message.json'),
require('./models/tradle.Method.json'),
require('./models/tradle.ModelsPack.json'),
require('./models/tradle.Money.json'),
require('./models/tradle.MyIdentities.json'),
require('./models/tradle.MyProduct.json'),
require('./models/tradle.Name.json'),
require('./models/tradle.Nationality.json'),
require('./models/tradle.NewMessageModel.json'),
require('./models/tradle.NextFormRequest.json'),
require('./models/tradle.Object.json'),
require('./models/tradle.Organization.json'),
require('./models/tradle.PairingData.json'),
require('./models/tradle.PairingRequest.json'),
require('./models/tradle.PairingResponse.json'),
require('./models/tradle.Partial.json'),
require('./models/tradle.Passport.json'),
require('./models/tradle.PassportVerification.json'),
require('./models/tradle.Phone.json'),
require('./models/tradle.PhoneTypes.json'),
require('./models/tradle.Photo.json'),
require('./models/tradle.ProductApplication.json'),
require('./models/tradle.ProductList.json'),
require('./models/tradle.ProductRequest.json'),
require('./models/tradle.Profile.json'),
require('./models/tradle.ProgressMessage.json'),
require('./models/tradle.PropertyChooser.json'),
require('./models/tradle.PubKey.json'),
require('./models/tradle.Remediation.json'),
require('./models/tradle.RemediationSimpleMessage.json'),
require('./models/tradle.Residence.json'),
require('./models/tradle.ResidenceType.json'),
require('./models/tradle.ResidentialStatus.json'),
require('./models/tradle.SalaryVerification.json'),
require('./models/tradle.SecurityCode.json'),
require('./models/tradle.SelfIntroduction.json'),
require('./models/tradle.ServiceProvider.json'),
require('./models/tradle.Settings.json'),
require('./models/tradle.Sex.json'),
require('./models/tradle.ShareContext.json'),
require('./models/tradle.SharedResource.json'),
require('./models/tradle.SimpleMessage.json'),
require('./models/tradle.SkillVerification.json'),
require('./models/tradle.StylesPack.json'),
require('./models/tradle.TermsAndConditions.json'),
require('./models/tradle.UtilityBillVerification.json'),
require('./models/tradle.Verifiable.json'),
require('./models/tradle.Verification.json'),
require('./models/tradle.VerifiedItem.json'),
require('./models/tradle.VisualVerificationMethod_Wealth.json'),
require('./models/tradle.WebSite.json')]
models.forEach(function (m) {
  models[m.id] = m
})