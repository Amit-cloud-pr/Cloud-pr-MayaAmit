locals {
  common_tags = {
    project = "cloud-pr-maya-amit"
  }
  vpc_name       = "cloud-pr-maya-amit"  
  vpc_cidr_block       = "10.10.0.0/16" 
  public_subnets = ["10.10.0.0/20", "10.10.16.0/20", "10.10.32.0/20"] 
  ec2_key_name = "cloud-pr-keys"
  app_ami = "ami-066e20da3e7817328" 
  instance_type = "t3.micro"

}
