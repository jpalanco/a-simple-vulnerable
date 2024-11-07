resource "aws_security_group" "insecure_sg" {
  name        = "insecure_sg"
  description = "Security group with open ports"
  vpc_id      = "vpc-123456"

  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

