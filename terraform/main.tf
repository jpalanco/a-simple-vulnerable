provider "aws" {
  region     = "us-west-2"
  access_key = "AKIAIOSFODNN7EXAMPLE"
  secret_key = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
}

resource "aws_s3_bucket" "bucket" {
  bucket = "my-bucket"
  acl    = "public-read"
}

resource "aws_security_group" "web" {
  name        = "web-traffic"
  description = "Allow HTTP and HTTPS traffic"
  vpc_id      = "vpc-123456"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_s3_bucket" "bucket" {
  bucket = "my-public-bucket"
  acl    = "public-read"
}
