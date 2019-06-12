require 'bundler'
Bundler.require

# binding.pry


DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}


DB[:conn].results_as_hash = true
# [
#   [1, 'coffee', 1]
# ]

sql = <<SQL
  CREATE TABLE
  IF NOT EXISTS tweets
  (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT,
    user_id INTEGER
  );
SQL


DB[:conn].execute(sql)



require_relative '../lib/tweet.rb'
require_relative '../lib/tweets_app.rb'
