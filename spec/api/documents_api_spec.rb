require_relative '../../api/documents_api'

describe Api::DocumentsRequest do

  subject { described_class.new(params) }

  let(:default_params) {
    {
      disability_benefits: "false",
      employee: "false",
      self_employed: "false",
      child_support: "false",
      retired: "false",
      unemployment_benefits: "false",
      has_rental_income: "false",
      renting: "false",
      owns_home: "false",
      shelter: "false",
      living_with_family_or_friends: "false",
      all_citizens: "true",
      recently_lost_job_and_received_paycheck: "false",
      has_birth_certificate: "false",
      has_social_security_card: "false",
      has_state_id: "true"
    }
  }

  context "default params from screener" do
    let(:params) { default_params }
    let(:outcome) { subject.fetch_documents }
    let(:residency_documents) { outcome[:residency_documents] }
    let(:identity_documents) { outcome[:identity_documents] }

    it "returns the correct documents data" do
      expect(residency_documents).to eq([
        { official_name: "State ID", description: "State ID"},
        { official_name: "Mail", description: "Mail document showing postmark within last 30 days with Illinois address"},
        { official_name: "Medical Records", description: "Medical records/clinic cards"},
      ])

      expect(identity_documents).to eq([
        { official_name: "School Photo ID"},
        { official_name: "U.S. Military ID Card"},
        { official_name: "Voter Registration Card"},
        { official_name: "State ID", description: "State ID"},
      ])
    end
  end

  context "employee" do
    let(:params) do
      these_params = default_params
      these_params[:employee] = "true"
      these_params
    end

    it "returns correct income documents" do
      expect(subject.fetch_documents[:income_documents].size).to eq 1
      expect(subject.fetch_documents[:income_documents][0][:official_name]).to eq 'Pay Stubs for the Past 30 Days'
    end

  end

  context "homeowning family" do
    let(:params) do
      these_params = default_params
      these_params[:owns_home] = "true"
      these_params
    end

    let(:residency_document_names) {
      subject.fetch_documents[:residency_documents].map { |doc| doc[:official_name] }
    }

    it "returns correct residency documents" do
      expect(residency_document_names.size).to eq 5
      expect(residency_document_names).to include "Home Owners Insurance"
      expect(residency_document_names).to include "Property Tax Bill"
    end

  end

end
