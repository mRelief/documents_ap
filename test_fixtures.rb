## Fixtures for specs:

SINGLE_HOUSEHOLD_MEMBER_EMPLOYED = {
  "benefits_application": {
    "household_members": [
      {
        "child_under_18": false,
        "disability_benefits": false,
        "is_employee": true,
        "self_employed": false,
        "receiving_child_support": false,
        "is_retired": false,
      }
    ],
    "is_applying_for_expedited": false
  }
}.freeze

SINGLE_HOUSEHOLD_MEMBER_SELF_EMPLOYED = {
  "benefits_application": {
    "household_members": [
      {
        "child_under_18": false,
        "disability_benefits": false,
        "is_employee": false,
        "self_employed": true,
        "receiving_child_support": false,
        "is_retired": false,
      }
    ],
    "is_applying_for_expedited": false
  }
}.freeze

MULTI_MEMBER_HOUSEHOLD_RECEIVING_CHILD_SUPPORT = {
  "benefits_application": {
    "household_members": [
      {
        "child_under_18": false,
        "disability_benefits": false,
        "is_employee": true,
        "self_employed": false,
        "receiving_child_support": true,
        "is_retired": false,
      },
      {
        "child_under_18": true,
        "disability_benefits": false,
        "is_employee": false,
        "self_employed": false,
        "receiving_child_support": false,
        "is_retired": false,
      },
      {
        "child_under_18": true,
        "disability_benefits": false,
        "is_employee": false,
        "self_employed": false,
        "receiving_child_support": false,
        "is_retired": false,
      },
    ],
    "is_applying_for_expedited": false
  }
}.freeze

EXPEDITED_BENEFITS = {
  "benefits_application": {
    "household_members": [
      {
        "child_under_18": false,
        "disability_benefits": false,
        "is_employee": false,
        "self_employed": true,
        "receiving_child_support": false,
        "is_retired": false,
      }
    ],
    "is_applying_for_expedited": true
  }
}.freeze

MULTI_MEMBER_HOUSEHOLD_WITH_RETIREE_DISABLED_AND_WORKING = {
  "benefits_application": {
    "household_members": [
      {
        "child_under_18": false,
        "disability_benefits": false,
        "is_employee": false,
        "self_employed": false,
        "receiving_child_support": false,
        "is_retired": true,
      },
      {
        "child_under_18": false,
        "disability_benefits": true,
        "is_employee": false,
        "self_employed": false,
        "receiving_child_support": false,
        "is_retired": false
      },
      {
        "child_under_18": false,
        "disability_benefits": false,
        "is_employee": true,
        "self_employed": false,
        "receiving_child_support": false,
        "is_retired": false,
      },
    ],
    "is_applying_for_expedited": false
  }
}.freeze
