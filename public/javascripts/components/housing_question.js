(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;

  window.shared.HousingQuestion = React.createClass({

    getInitialState: function() {
      return {
        showMoreOptions: false,
      };
    },

    propTypes: {
      onCheckRenting: React.PropTypes.func.isRequired,
      onCheckOwnHome: React.PropTypes.func.isRequired,
      onCheckShelter: React.PropTypes.func.isRequired,
      onClickNextFromHousingQuestion: React.PropTypes.func.isRequired,
      onCheckFamilyOrFriends: React.PropTypes.func.isRequired,
      onLivingSituationWithoutSpecialDocuments: React.PropTypes.func.isRequired,
    },

    render: function () {
      return dom.div({},
        dom.p({}, 'Describe your living situation:'),
        dom.input({ type: 'radio', name: 'livingQuestion', onClick: this.props.onCheckRenting }),
        dom.label({}, 'Renting'),
        dom.br({}),
        dom.input({ type: 'radio', name: 'livingQuestion', onClick: this.props.onCheckOwnHome }),
        dom.label({}, 'Own home'),
        dom.br({}),
        dom.input({ type: 'radio', name: 'livingQuestion', onClick: this.props.onCheckFamilyOrFriends }),
        dom.label({}, 'Living with family/friends'),
        dom.br({}),
        dom.input({ type: 'radio', name: 'livingQuestion', onClick: this.props.onCheckShelter }),
        dom.label({}, 'Shelter'),
        dom.br({}),
        this.renderAdditionalOptions(),
        dom.input({ type: 'radio', name: 'livingQuestion', onClick: this.toggleAdditionalOptions }),
        dom.label({}, 'None of the above'),
        dom.br({}),
        dom.br({}),
        dom.input({
          type: 'submit',
          value: 'Next',
          onClick: this.props.onClickNextFromHousingQuestion,
          style: window.shared.ButtonStyle
        })
      );
    },

    toggleAdditionalOptions: function () {
      this.props.onLivingSituationWithoutSpecialDocuments();  // If the user leaves this as the
                                                              // selected radio button, clear all
                                                              // other living situation fields
      currentState = this.state.showMoreOptions;
      this.setState({ showMoreOptions: !currentState });
    },

    renderAdditionalOptions: function () {
      if (this.state.showMoreOptions === false) return null;

      return dom.div({},
        dom.input({ type: 'radio', name: 'livingQuestion', onClick: this.props.onLivingSituationWithoutSpecialDocuments }),
        dom.label({}, 'Car'),
        dom.br({}),
        dom.input({ type: 'radio', name: 'livingQuestion', onClick: this.props.onLivingSituationWithoutSpecialDocuments }),
        dom.label({}, 'Motel'),
        dom.br({}),
        dom.input({ type: 'radio', name: 'livingQuestion', onClick: this.props.onLivingSituationWithoutSpecialDocuments }),
        dom.label({}, 'In Kind')
      );
    }

  });
})();
