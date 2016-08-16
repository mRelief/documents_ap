(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);
  var EmploymentQuestion = window.shared.EmploymentQuestion;
  var IncomeSourcesQuestion = window.shared.IncomeSourcesQuestion;

  window.shared.IncomeQuestionsPage = React.createClass({

    propTypes: {
      fetchDocumentsFromServer: React.PropTypes.func.isRequired,
      singlePersonHousehold: React.PropTypes.bool.isRequired,
      onUpdateDataField: React.PropTypes.func.isRequired
    },

    getInitialState: function() {
      return { showRequiredQuestionsWarning: false };
    },

    render: function () {
      return dom.div({},
        this.renderEmploymentQuestion(),
        this.renderIncomeSourcesQuestion(),
        dom.br({}),
        this.requiredQuestionWarning(),
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
      });
    },

    renderIncomeSourcesQuestion: function () {
      return createEl(IncomeSourcesQuestion, {
        singlePersonHousehold: this.props.singlePersonHousehold,
        onUpdateDataField: this.props.onUpdateDataField,
      });
    },

    onClickNext: function () {
      if (this.atLeastOneChecked()) {
        this.props.fetchDocumentsFromServer();
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