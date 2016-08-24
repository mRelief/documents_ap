(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);
  var EmploymentQuestion = window.shared.EmploymentQuestion;
  var IncomeSourcesQuestion = window.shared.IncomeSourcesQuestion;
  var CitizenshipQuestion = window.shared.CitizenshipQuestion;

  window.shared.IncomeQuestionsPage = React.createClass({

    propTypes: {
      singlePersonHousehold: React.PropTypes.bool.isRequired,
      onUpdateDataField: React.PropTypes.func.isRequired,
      onCheckNotAllCitizens: React.PropTypes.func.isRequired,
      onCheckYesAllCitizens: React.PropTypes.func.isRequired,
      singlePersonHousehold: React.PropTypes.bool.isRequired,
      onClickNext: React.PropTypes.func.isRequired,
      onClickBackButton: React.PropTypes.func.isRequired,
      userSubmittedData: React.PropTypes.object.isRequired,
      userWentBack: React.PropTypes.bool.isRequired
    },

    getInitialState: function() {
      return { showRequiredQuestionsWarning: false };
    },

    render: function () {
      return dom.div({},
        this.renderEmploymentQuestion(),
        this.renderIncomeSourcesQuestion(),
        this.renderCitizenshipQuestion(),
        dom.br({}),
        this.requiredQuestionWarning(),
        dom.input({
          type: 'submit',
          value: 'Back',
          style: window.shared.ButtonStyle,
          onClick: this.props.onClickBackButton
        }),
        dom.input({
          type: 'submit',
          value: 'Done',
          style: window.shared.ButtonStyle,
          onClick: this.onClickNext
        })
      );
    },

    renderEmploymentQuestion: function () {
      return createEl(EmploymentQuestion, {
        singlePersonHousehold: this.props.singlePersonHousehold,
        onUpdateDataField: this.props.onUpdateDataField,
        userSubmittedData: this.props.userSubmittedData,
        userWentBack: this.props.userWentBack,
      });
    },

    renderIncomeSourcesQuestion: function () {
      return createEl(IncomeSourcesQuestion, {
        singlePersonHousehold: this.props.singlePersonHousehold,
        onUpdateDataField: this.props.onUpdateDataField,
        userSubmittedData: this.props.userSubmittedData,
        userWentBack: this.props.userWentBack,
      });
    },

    renderCitizenshipQuestion: function () {
      return createEl(CitizenshipQuestion, {
        onCheckNotAllCitizens: this.props.onCheckNotAllCitizens,
        onCheckYesAllCitizens: this.props.onCheckYesAllCitizens,
        singlePersonHousehold: this.props.singlePersonHousehold
      });
    },

    onClickNext: function () {
      if (this.atLeastOneChecked()) {
        this.props.onClickNext();
      } else {
        this.setState({ showRequiredQuestionsWarning: true });
      };
    },

    atLeastOneChecked: function () {
      return $('[type="checkbox"]').get().map(function(checkbox) {
        return checkbox.checked;
      }).reduce(function(a, b) {
        return (a || b);
      });
    },

    requiredQuestionWarning: function () {
      if (this.state.showRequiredQuestionsWarning === false) return null;

      return dom.div({},
        dom.div({
          style: {
            color: 'red',
            fontStyle: 'italic'
          }
        }, 'Please check at least one response.'),
        dom.br({})
      );
    },

  });
})();
