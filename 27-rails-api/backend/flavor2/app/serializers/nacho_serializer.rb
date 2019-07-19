class NachoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :cheese, :name
end
