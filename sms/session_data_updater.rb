class SessionDataUpdater < Struct.new :session, :original_body

  def update_data
    new_session = session.clone

    return new_session if new_session[:count] == 0

    return clean_session if reset?

    case new_session[:count]
    when 1
      new_session['single_person_household'] = 'false' if body.include? 'B'
    when 2
      new_session['renting'] = 'true' if body.include? 'A'
      new_session['owns_home'] = 'true' if body.include? 'B'
      new_session['living_with_family_or_friends'] = 'true' if body.include? 'C'
      new_session['shelter'] = 'true' if body.include? 'D'
      new_session['more_housing_options'] = 'true' if body.include? 'OPTIONS'
    when 3
      new_session['all_citizens'] = 'false' if body[0] == 'N'
    when 4
      new_session['employee'] = 'true' if body.include? 'A'
      new_session['self_employed'] = 'true' if body.include? 'B'
      new_session['retired'] = 'true' if body.include? 'C'
      new_session['unemployment_benefits'] = 'true' if body.include? 'D'
    when 5
      new_session['disability_benefits'] = 'true' if body.include? 'A'
      new_session['child_support'] = 'true' if body.include? 'B'
      new_session['has_rental_income'] = 'true' if body.include? 'C'
    when 6
      new_session['has_state_id'] = 'false' if body[0] == 'N'
    end

    return new_session
  end

  private

  def reset?
    body == 'RESET'
  end

  def body
    original_body.upcase
  end

  def clean_session
    new_session = session.clone

    new_session['count'] = 0
    new_session['single_person_household'] = 'true'
    new_session['renting'] = 'false'
    new_session['owns_home'] = 'false'
    new_session['shelter'] = 'false'
    new_session['living_with_family_or_friends'] = 'false'
    new_session['all_citizens'] = 'true'
    new_session['employee'] = 'false'
    new_session['self_employed'] = 'false'
    new_session['retired'] = 'false'
    new_session['unemployment_benefits'] = 'false'
    new_session['has_rental_income'] = 'false'
    new_session['disability_benefits'] = 'false'
    new_session['child_support'] = 'false'
    new_session['has_state_id'] = 'true'
    new_session['more_housing_options'] = 'false'

    return new_session
  end

end
