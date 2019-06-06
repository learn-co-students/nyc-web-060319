require_relative '../nest'
require_relative '../squirrel'
require_relative '../tree'



s1 = Squirrel.new('alvin', 'red')
s2 = Squirrel.new('simon', 'blue')
s3 = Squirrel.new('theo', 'green')
t1 = Tree.new('bonsai', 1)
t2 = Tree.new('banion', 2)
t3 = Tree.new('maple', 5)
n1 = Nest.new(s3, t3, true)
n2 = Nest.new(s2, t3, true)
n3 = Nest.new(s1, t3, true)
n4 = Nest.new(s1, t1, true)
n5 = Nest.new(s1, t1, true)
n6 = Nest.new(s2, t1, true)
n7 = Nest.new(s2, t1, true)
n8 = Nest.new(s2, t1, true)
n9 = Nest.new(s3, t1, true)
n0 = Nest.new(s3, t1, true)



binding.pry
