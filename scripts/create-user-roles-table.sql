-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop table if exists (for development purposes)
DROP TABLE IF EXISTS user_roles;

-- Create user roles table
CREATE TABLE user_roles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN (
    'host', 
    'manager', 
    'area-manager', 
    'franchisee', 
    'brand-manager', 
    'owner', 
    'group-marketing-director',
    'ops-director'
  )),
  avatar_url TEXT,
  locations TEXT[] DEFAULT '{}',
  brands TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert demo users with different roles
INSERT INTO user_roles (email, name, role, avatar_url, locations, brands) VALUES
('host@restoguru.com', 'Sarah Johnson', 'host', '/placeholder.svg?height=40&width=40&text=SJ', ARRAY['downtown'], ARRAY['brand1']),
('manager@restoguru.com', 'Mike Chen', 'manager', '/placeholder.svg?height=40&width=40&text=MC', ARRAY['downtown'], ARRAY['brand1']),
('area@restoguru.com', 'Lisa Rodriguez', 'area-manager', '/placeholder.svg?height=40&width=40&text=LR', ARRAY['downtown', 'mall-plaza', 'airport'], ARRAY['brand1']),
('franchisee@restoguru.com', 'David Kim', 'franchisee', '/placeholder.svg?height=40&width=40&text=DK', ARRAY['downtown', 'mall-plaza', 'airport', 'beachfront'], ARRAY['brand1']),
('brand@restoguru.com', 'Emma Thompson', 'brand-manager', '/placeholder.svg?height=40&width=40&text=ET', ARRAY[], ARRAY['brand1']),
('owner@restoguru.com', 'Robert Wilson', 'owner', '/placeholder.svg?height=40&width=40&text=RW', ARRAY[], ARRAY['brand1', 'brand2', 'brand3']),
('marketing@restoguru.com', 'Jennifer Davis', 'group-marketing-director', '/placeholder.svg?height=40&width=40&text=JD', ARRAY[], ARRAY['brand1', 'brand2', 'brand3']),
('ops@restoguru.com', 'Alex Martinez', 'ops-director', '/placeholder.svg?height=40&width=40&text=AM', ARRAY[], ARRAY['brand1', 'brand2', 'brand3']);

-- Create an index for faster email lookups
CREATE INDEX idx_user_roles_email ON user_roles(email);

-- Grant necessary permissions
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows read access to all users (for demo purposes)
CREATE POLICY "Allow read access to user_roles" ON user_roles
  FOR SELECT USING (true);
