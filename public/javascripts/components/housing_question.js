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
      onUpdateLivingSituationField: React.PropTypes.func.isRequired,
      userWentBack: React.PropTypes.bool.isRequired,
      userSubmittedData: React.PropTypes.object.isRequired
    },

    render: function () {
      return dom.div({},
        dom.p({}, 'Describe your living situation:'),
        dom.input({
          type: 'radio',
          name: 'livingQuestion',
          onClick: this.props.onUpdateLivingSituationField,
          data: 'renting',
          defaultChecked: (
            this.props.userWentBack &&
            this.props.userSubmittedData.renting === 'true'
          )
        }),
        dom.label({}, 'Renting'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'livingQuestion',
          onClick: this.props.onUpdateLivingSituationField,
          data: 'owns_home',
          defaultChecked: (
            this.props.userWentBack &&
            this.props.userSubmittedData.owns_home === 'true'
          )
        }),
        dom.label({}, 'Own home'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'livingQuestion',
          onClick: this.props.onUpdateLivingSituationField,
          data: 'living_with_family_or_friends',
          defaultChecked: (
            this.props.userWentBack &&
            this.props.userSubmittedData.living_with_family_or_friends === 'true'
          )
        }),
        dom.label({}, 'Living with family/friends'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'livingQuestion',
          onClick: this.props.onUpdateLivingSituationField,
          data: 'shelter',
          defaultChecked: (
            this.props.userWentBack &&
            this.props.userSubmittedData.shelter === 'true'
          )
        }),
        dom.label({}, 'Shelter'),
        dom.br({}),
        this.renderAdditionalOptions(),
        dom.input({ type: 'radio', name: 'livingQuestion', onClick: this.toggleAdditionalOptions }),
        dom.label({}, 'None of the above'),
        dom.br({}),
        dom.br({})
      );
    },

    toggleAdditionalOptions: function () {
      this.setState({ showMoreOptions: true });
    },

    renderAdditionalOptions: function () {
      if (this.state.showMoreOptions === false) return null;

      return dom.div({},
        dom.input({
          type: 'radio',
          name: 'livingQuestion',
          onClick: this.props.onUpdateLivingSituationField,
          data: 'car',
          defaultChecked: (
            this.props.userWentBack &&
            this.props.userSubmittedData.car === 'true'
          )
        }),
        dom.label({}, 'Car'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'livingQuestion',
          onClick: this.props.onUpdateLivingSituationField,
          data: 'motel',
          defaultChecked: (
            this.props.userWentBack &&
            this.props.userSubmittedData.motel === 'true'
          )
        }),
        dom.label({}, 'Motel'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'livingQuestion',
          onClick: this.props.onUpdateLivingSituationField,
          data: 'in_kind',
          defaultChecked: (
            this.props.userWentBack &&
            this.props.userSubmittedData.in_kind === 'true'
          )
        }),
        dom.label({}, 'In Kind')
      );
    }

  });
})();
