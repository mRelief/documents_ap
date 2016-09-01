class IncomingMessageCleaner < Struct.new :original_message_body

  def cleaned
    original_message_body.split('-')[0].upcase
                                       .gsub('.', '')
                                       .strip
  end

end
