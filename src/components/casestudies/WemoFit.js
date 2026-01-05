import React from 'react';
import Style from './CaseStudy.module.scss';
import {Box, Grid} from "@mui/material";

export default function WemoFit() {
    return (
        <Box className={Style.caseStudy}>
            <Grid container display={'flex'} flexDirection={'column'} p={'2rem'}>
                <Grid item>
                    <Box component={'h1'} className={Style.title}>
                        WemoFit - Fitness Platform DevOps Migration
                    </Box>
                    <Box component={'p'} className={Style.text} style={{fontStyle: 'italic', marginTop: '1rem'}}>
                        Production Platform: <a href="https://acme.wemofit.io/" target="_blank" rel="noopener noreferrer" style={{color: '#8D53FF'}}>https://acme.wemofit.io/</a>
                    </Box>
                </Grid>

                {/* Overview Section */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Overview</Box>
                    <Box component={'p'} className={Style.text}>
                        WemoFit is a comprehensive multi-tenant fitness and wellness SaaS platform built with Ruby on Rails. As a DevOps Engineer,
                        I was responsible for containerizing a legacy 10-year-old codebase and migrating it to AWS cloud infrastructure with
                        Docker, focusing on creating a scalable, production-ready deployment pipeline.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        This project presented unique challenges due to the age of the codebase (Ruby 2.6.10, Bundler 1.17.3) and required
                        extensive troubleshooting to modernize the deployment while maintaining backward compatibility with legacy dependencies.
                    </Box>
                </Grid>

                {/* Key Highlights */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Key Highlights</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Legacy Modernization:</strong> Dockerized 10-year-old Ruby on Rails monorepo with 4 microservices</li>
                        <li><strong>AWS Infrastructure:</strong> Deployed on EC2 with RDS PostgreSQL, ALB, VPC, and Security Groups</li>
                        <li><strong>Multi-Service Architecture:</strong> Containerized Rails, Challenges, Trainer, and UI services</li>
                        <li><strong>Database Management:</strong> Migrated to AWS RDS PostgreSQL with multi-database setup</li>
                        <li><strong>Container Registry:</strong> Implemented AWS ECR for Docker image management</li>
                        <li><strong>Production Deployment:</strong> Successfully deployed to production at acme.wemofit.io</li>
                        <li><strong>Infrastructure as Code:</strong> Configured VPC, subnets, security groups, and load balancers</li>
                    </Box>
                </Grid>

                {/* Role and Responsibilities */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>My Role & Responsibilities</Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>DevOps Engineer</strong> - Infrastructure & Deployment
                    </Box>
                    <Box component={'ul'} className={Style.list}>
                        <li>Analyzed and dockerized legacy Ruby on Rails codebase (10+ years old)</li>
                        <li>Created multi-stage Dockerfiles for Rails 6.0 applications with Ruby 2.6.10</li>
                        <li>Configured AWS infrastructure: EC2 instances, RDS PostgreSQL, Application Load Balancer</li>
                        <li>Set up AWS ECR (Elastic Container Registry) for Docker image storage and versioning</li>
                        <li>Implemented security groups and VPC configuration for network isolation</li>
                        <li>Managed multi-database PostgreSQL setup on RDS with separate databases per service</li>
                        <li>Configured environment variable management for production deployments</li>
                        <li>Troubleshot and resolved legacy dependency issues (Ruby 2.3.8 → 2.6.10 migration)</li>
                        <li>Documented deployment procedures and infrastructure configuration</li>
                        <li>Implemented health checks and monitoring for containerized applications</li>
                    </Box>
                </Grid>

                {/* System Architecture */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>AWS Infrastructure Architecture</Box>
                    <Box component={'p'} className={Style.text}>
                        Designed and deployed a production-grade AWS infrastructure with Application Load Balancer distributing traffic
                        to EC2 instances running Docker containers, backed by RDS PostgreSQL for persistent data storage.
                    </Box>
                    <Box className={Style.diagram} mt={3}>
                        <svg viewBox="0 0 900 650" style={{width: '100%', height: 'auto'}}>
                            {/* Title */}
                            <text x="450" y="25" fill="#8D53FF" fontSize="20" fontWeight="bold" textAnchor="middle">
                                WemoFit AWS Infrastructure
                            </text>

                            {/* Internet */}
                            <ellipse cx="450" cy="80" rx="60" ry="30" fill="#4ECDC4" stroke="#8D53FF" strokeWidth="2"/>
                            <text x="450" y="85" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Internet</text>

                            {/* Application Load Balancer */}
                            <rect x="350" y="140" width="200" height="80" fill="#FFA500" stroke="#8D53FF" strokeWidth="2" rx="8"/>
                            <text x="450" y="165" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Application Load Balancer</text>
                            <text x="450" y="185" fill="white" fontSize="11" textAnchor="middle">wemofit-alb</text>
                            <text x="450" y="203" fill="white" fontSize="10" textAnchor="middle">Port 80 (HTTP)</text>

                            {/* VPC Box */}
                            <rect x="50" y="250" width="800" height="360" fill="none" stroke="#CA6BE6" strokeWidth="3" strokeDasharray="10,5" rx="10"/>
                            <text x="70" y="275" fill="#CA6BE6" fontSize="16" fontWeight="bold">VPC: 172.31.0.0/16</text>

                            {/* Availability Zones */}
                            <rect x="80" y="290" width="360" height="290" fill="rgba(141, 83, 255, 0.05)" stroke="#8D53FF" strokeWidth="2" strokeDasharray="5,5" rx="8"/>
                            <text x="90" y="315" fill="#8D53FF" fontSize="13" fontWeight="bold">AZ: us-west-1a</text>
                            <text x="90" y="332" fill="#8D53FF" fontSize="11">Subnet: 172.31.xx.0/20</text>

                            <rect x="460" y="290" width="360" height="290" fill="rgba(141, 83, 255, 0.05)" stroke="#8D53FF" strokeWidth="2" strokeDasharray="5,5" rx="8"/>
                            <text x="470" y="315" fill="#8D53FF" fontSize="13" fontWeight="bold">AZ: us-west-1c</text>
                            <text x="470" y="332" fill="#8D53FF" fontSize="11">Subnet: 172.31.x.0/20</text>

                            {/* EC2 Instance */}
                            <rect x="120" y="360" width="280" height="200" fill="#fff" stroke="#8D53FF" strokeWidth="2" rx="8"/>
                            <rect x="120" y="360" width="280" height="35" fill="#8D53FF" rx="8"/>
                            <text x="260" y="382" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">EC2 Instance</text>
                            <text x="260" y="397" fill="white" fontSize="10" textAnchor="middle">172.31.xx.xxx</text>

                            {/* Docker Containers */}
                            <rect x="140" y="410" width="240" height="40" fill="#4ECDC4" stroke="#8D53FF" strokeWidth="1.5" rx="5"/>
                            <text x="165" y="425" fill="white" fontSize="11" fontWeight="bold">wemofit-rails</text>
                            <text x="165" y="440" fill="white" fontSize="9">Port 4000:3000</text>

                            <rect x="140" y="460" width="240" height="40" fill="#4ECDC4" stroke="#8D53FF" strokeWidth="1.5" rx="5"/>
                            <text x="165" y="475" fill="white" fontSize="11" fontWeight="bold">wemofit-trainer</text>
                            <text x="165" y="490" fill="white" fontSize="9">Port 4001:3000</text>

                            <rect x="140" y="510" width="240" height="40" fill="#4ECDC4" stroke="#8D53FF" strokeWidth="1.5" rx="5"/>
                            <text x="165" y="525" fill="white" fontSize="11" fontWeight="bold">wemofit-challenges</text>
                            <text x="165" y="540" fill="white" fontSize="9">Port 4002:3000</text>

                            {/* RDS PostgreSQL */}
                            <rect x="500" y="400" width="280" height="140" fill="#FFD700" stroke="#8D53FF" strokeWidth="2" rx="8"/>
                            <text x="640" y="425" fill="#1f1f1f" fontSize="14" fontWeight="bold" textAnchor="middle">AWS RDS PostgreSQL</text>
                            <text x="640" y="445" fill="#1f1f1f" fontSize="11" textAnchor="middle">wemofit-postgres.xxxxxxxxxxxxx...</text>
                            <text x="640" y="465" fill="#1f1f1f" fontSize="11" textAnchor="middle">us-west-1.rds.amazonaws.com</text>
                            <text x="520" y="490" fill="#1f1f1f" fontSize="10">• wemofit (main DB)</text>
                            <text x="520" y="508" fill="#1f1f1f" fontSize="10">• wemofit_trainer</text>
                            <text x="520" y="526" fill="#1f1f1f" fontSize="10">• wemofit_challenges</text>

                            {/* ECR */}
                            <rect x="620" y="70" width="230" height="80" fill="#FF6B6B" stroke="#8D53FF" strokeWidth="2" rx="8"/>
                            <text x="735" y="95" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">AWS ECR</text>
                            <text x="735" y="115" fill="white" fontSize="10" textAnchor="middle">xxxxxxxxxxxx.dkr.ecr.us-west-1</text>
                            <text x="735" y="133" fill="white" fontSize="9" textAnchor="middle">Container Image Registry</text>

                            {/* Connections */}
                            {/* Internet to ALB */}
                            <line x1="450" y1="110" x2="450" y2="140" stroke="#8D53FF" strokeWidth="2"/>
                            <polygon points="450,140 446,132 454,132" fill="#8D53FF"/>

                            {/* ALB to EC2 */}
                            <line x1="400" y1="220" x2="260" y2="360" stroke="#8D53FF" strokeWidth="2"/>
                            <polygon points="260,360 256,351 267,355" fill="#8D53FF"/>

                            {/* EC2 to RDS */}
                            <line x1="400" y1="470" x2="500" y2="470" stroke="#8D53FF" strokeWidth="2" strokeDasharray="5,5"/>
                            <polygon points="500,470 492,466 492,474" fill="#8D53FF"/>
                            <text x="430" y="465" fontSize="10" fill="#8D53FF">PostgreSQL</text>

                            {/* ECR to EC2 */}
                            <line x1="620" y1="130" x2="400" y2="380" stroke="#CA6BE6" strokeWidth="2" strokeDasharray="5,5"/>
                            <text x="500" y="240" fontSize="10" fill="#CA6BE6">docker pull</text>

                            {/* Security Groups Labels */}
                            <text x="90" y="595" fontSize="11" fill="#8D53FF" fontWeight="bold">Security Groups:</text>
                            <text x="90" y="613" fontSize="10" fill="#8D53FF">ALB SG: sg-xxxxxxxxxxxxxxxxx (HTTP 80)</text>
                            <text x="380" y="613" fontSize="10" fill="#8D53FF">EC2 SG: sg-xxxxxxxxxxxxxxxxx (Port 3000 from ALB)</text>

                            {/* Legend */}
                            <rect x="50" y="625" width="15" height="15" fill="#4ECDC4"/>
                            <text x="75" y="637" fontSize="11">Docker Containers</text>
                            <rect x="220" y="625" width="15" height="15" fill="#FFD700"/>
                            <text x="245" y="637" fontSize="11">Database</text>
                            <rect x="360" y="625" width="15" height="15" fill="#FFA500"/>
                            <text x="385" y="637" fontSize="11">Load Balancer</text>
                            <rect x="520" y="625" width="15" height="15" fill="#FF6B6B"/>
                            <text x="545" y="637" fontSize="11">Container Registry</text>
                        </svg>
                    </Box>
                </Grid>

                {/* Tech Stack */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Tech Stack & Tools</Box>
                    <table className={Style.table}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Technologies</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Application</strong></td>
                                <td>Ruby on Rails 6.0, Ruby 2.6.10, Puma Web Server</td>
                            </tr>
                            <tr>
                                <td><strong>Containerization</strong></td>
                                <td>Docker, Docker Compose, Multi-stage Dockerfiles</td>
                            </tr>
                            <tr>
                                <td><strong>Cloud Provider</strong></td>
                                <td>AWS (Amazon Web Services)</td>
                            </tr>
                            <tr>
                                <td><strong>Compute</strong></td>
                                <td>EC2 (Elastic Compute Cloud)</td>
                            </tr>
                            <tr>
                                <td><strong>Database</strong></td>
                                <td>AWS RDS PostgreSQL, psql client</td>
                            </tr>
                            <tr>
                                <td><strong>Networking</strong></td>
                                <td>Application Load Balancer (ALB), VPC, Security Groups, Subnets</td>
                            </tr>
                            <tr>
                                <td><strong>Container Registry</strong></td>
                                <td>AWS ECR (Elastic Container Registry)</td>
                            </tr>
                            <tr>
                                <td><strong>Package Management</strong></td>
                                <td>Bundler 1.17.3, RubyGems 3.3.22</td>
                            </tr>
                            <tr>
                                <td><strong>Dependencies</strong></td>
                                <td>ImageMagick, FFmpeg, Node.js, Yarn, gosu</td>
                            </tr>
                            <tr>
                                <td><strong>CLI Tools</strong></td>
                                <td>AWS CLI, Docker CLI, psql</td>
                            </tr>
                        </tbody>
                    </table>
                </Grid>

                {/* Services Containerized */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Services Containerized</Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>1. wemofit-rails (Main Application)</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Description:</strong> Core Rails application handling user management, authentication, companies</li>
                        <li><strong>Port Mapping:</strong> 4000:3000</li>
                        <li><strong>Database:</strong> wemofit (main PostgreSQL database)</li>
                        <li><strong>Image:</strong> xxxxxxxxxxxx.dkr.ecr.us-west-1.amazonaws.com/wemofit-rails:20250910v2</li>
                        <li><strong>Key Features:</strong> Devise authentication, JWT tokens, multi-tenancy, ActiveAdmin</li>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>2. wemofit-trainer (Trainer Service)</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Description:</strong> Service for fitness trainers and nutritionists</li>
                        <li><strong>Port Mapping:</strong> 4001:3000</li>
                        <li><strong>Database:</strong> wemofit_trainer (dedicated PostgreSQL database)</li>
                        <li><strong>Image:</strong> xxxxxxxxxxxx.dkr.ecr.us-west-1.amazonaws.com/wemofit-trainer:20250908220443</li>
                        <li><strong>Integration:</strong> AWS S3 for file storage, PayPal for payments</li>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>3. wemofit-challenges (Challenges Service)</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Description:</strong> Fitness challenges and competitions module</li>
                        <li><strong>Port Mapping:</strong> 4002:3000</li>
                        <li><strong>Database:</strong> wemofit_challenges (dedicated PostgreSQL database)</li>
                        <li><strong>Image:</strong> xxxxxxxxxxxx.dkr.ecr.us-west-1.amazonaws.com/wemofit-challenges:20250908220443</li>
                        <li><strong>Architecture:</strong> Rails engine with step tracker integration</li>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>4. wemofit-ui (Frontend Application)</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Description:</strong> React-based frontend for web interface</li>
                        <li><strong>Deployment:</strong> Dockerized with Nginx</li>
                        <li><strong>API Integration:</strong> Connects to Rails backend services</li>
                    </Box>
                </Grid>

                {/* Challenges & Solutions */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Challenges & Solutions</Box>

                    <Box component={'h3'} className={Style.subsectionTitle}>Challenge 1: Legacy Codebase Dockerization</Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Problem:</strong> The codebase was 10 years old with Ruby 2.6.10 (EOL), ancient Bundler (1.17.3), and numerous
                        deprecated dependencies. Initial Docker builds failed due to native gem compilation issues and bundler version mismatches.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Solution:</strong> Created multi-stage Dockerfiles with precise version pinning. Upgraded RubyGems to 3.3.22 while
                        keeping Bundler at 1.17.3 to match Gemfile.lock. Installed system dependencies (libpq-dev, libffi-dev, build-essential)
                        required for native gem compilation. Used gosu for secure user permission handling instead of running as root.
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Challenge 2: Multi-Database Architecture on RDS</Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Problem:</strong> Application required three separate databases (wemofit, wemofit_trainer, wemofit_challenges)
                        with different users and permissions. Initial deployment used local PostgreSQL which caused data loss on container restarts.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Solution:</strong> Provisioned single AWS RDS PostgreSQL instance and created three separate databases. Used psql
                        to create databases and grant appropriate permissions to dedicated users (trainer_user, challenges_user). Configured
                        PostgreSQL extensions (uuid-ossp, pgcrypto) required by the application. Updated container environment variables with
                        RDS endpoints.
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Challenge 3: Container Networking & Port Conflicts</Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Problem:</strong> Multiple Rails services needed to run simultaneously on the same EC2 instance, each listening
                        on port 3000 internally. ALB target groups couldn't route to different containers.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Solution:</strong> Implemented port mapping strategy: wemofit-rails (4000:3000), wemofit-trainer (4001:3000),
                        wemofit-challenges (4002:3000). Configured ALB target groups to route requests to specific host ports. Used Docker's
                        --restart unless-stopped flag to ensure containers auto-restart on failure.
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Challenge 4: Security Groups & Network Access</Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Problem:</strong> Initial deployment had RDS inaccessible from EC2 due to misconfigured security groups. Also
                        struggled with allowing public HTTP traffic while restricting direct EC2 access.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Solution:</strong> Created layered security group architecture: ALB SG (sg-xxxxxxxxxxxxxxxxx) allows HTTP/80
                        from 0.0.0.0/0. EC2 SG (sg-xxxxxxxxxxxxxxxxx) allows port 3000 only from ALB SG. RDS SG allows PostgreSQL/5432 from EC2 SG.
                        Used AWS CLI to query and document all security group configurations.
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Challenge 5: Rails Asset Pipeline in Docker</Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Problem:</strong> Rails applications with asset pipeline required precompilation, but assets weren't being served
                        correctly in production. Static files missing from containerized environment.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Solution:</strong> Set RAILS_SERVE_STATIC_FILES=true environment variable to enable static asset serving in
                        production. Configured Rails to use RAILS_LOG_TO_STDOUT=true for proper logging in containerized environment. Generated
                        SECRET_KEY_BASE for each service and stored securely as environment variables.
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Challenge 6: Database Migration Execution</Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Problem:</strong> Rails db:migrate needed to run before container startup, but running migrations in Dockerfile
                        caused build failures when database wasn't accessible during image build.
                    </Box>
                    <Box component={'p'} className={Style.text}>
                        <strong>Solution:</strong> Created docker-entrypoint.sh scripts that check database connectivity before running migrations.
                        Used SKIP_DB_WAIT environment variable to bypass migration in cases where database was already up to date. Implemented
                        retry logic for database connection attempts during container startup.
                    </Box>
                </Grid>

                {/* Infrastructure Configuration */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>AWS Infrastructure Details</Box>

                    <Box component={'h3'} className={Style.subsectionTitle}>VPC Configuration</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>VPC ID:</strong> vpc-xxxxxxxxxxxxxxxxx</li>
                        <li><strong>CIDR Block:</strong> 172.31.0.0/16</li>
                        <li><strong>Region:</strong> us-west-1 (N. California)</li>
                        <li><strong>Availability Zones:</strong> us-west-1a, us-west-1c</li>
                        <li><strong>Internet Gateway:</strong> igw-xxxxxxxxxxxxxxxxx</li>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Application Load Balancer</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Name:</strong> wemofit-alb</li>
                        <li><strong>DNS:</strong> wemofit-alb-xxxxxxxxxx.us-west-1.elb.amazonaws.com</li>
                        <li><strong>Scheme:</strong> Internet-facing</li>
                        <li><strong>Target Groups:</strong> tg-wemofit-rails (port 3000, health check /healthz)</li>
                        <li><strong>Cross-Zone Load Balancing:</strong> Enabled</li>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>RDS PostgreSQL</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Endpoint:</strong> wemofit-postgres.xxxxxxxxxxxxxx.us-west-1.rds.amazonaws.com</li>
                        <li><strong>Port:</strong> 5432</li>
                        <li><strong>Engine:</strong> PostgreSQL</li>
                        <li><strong>Databases:</strong> wemofit, wemofit_trainer, wemofit_challenges</li>
                        <li><strong>Multi-AZ:</strong> Configured for high availability</li>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>ECR Repositories</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Registry:</strong> xxxxxxxxxxxx.dkr.ecr.us-west-1.amazonaws.com</li>
                        <li><strong>Repositories:</strong> wemofit-rails, wemofit-trainer, wemofit-challenges, wemofit-ui</li>
                        <li><strong>Image Tagging Strategy:</strong> Timestamp-based (YYYYMMDDHHMMSS)</li>
                        <li><strong>Latest Tags:</strong> 20250910v2, 20250908220443</li>
                    </Box>
                </Grid>

                {/* Deployment Process */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Deployment Process</Box>

                    <Box component={'h3'} className={Style.subsectionTitle}>Build & Push Workflow</Box>
                    <Box component={'ol'} className={Style.list}>
                        <li>Build Docker image locally with appropriate tag</li>
                        <li>Authenticate to AWS ECR using AWS CLI</li>
                        <li>Tag image with ECR repository URL and version</li>
                        <li>Push image to ECR registry</li>
                        <li>SSH into EC2 instance</li>
                        <li>Pull latest image from ECR</li>
                        <li>Stop and remove existing container</li>
                        <li>Run new container with updated image and environment variables</li>
                        <li>Monitor logs to ensure successful startup</li>
                        <li>Verify health checks pass on ALB target group</li>
                    </Box>

                    <Box component={'h3'} className={Style.subsectionTitle} mt={3}>Container Runtime Configuration</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Restart Policy:</strong> --restart unless-stopped (auto-restart on failure)</li>
                        <li><strong>Environment Variables:</strong> RAILS_ENV=production, DATABASE_URL, AWS credentials</li>
                        <li><strong>Logging:</strong> RAILS_LOG_TO_STDOUT=true for Docker log collection</li>
                        <li><strong>Port Bindings:</strong> Host ports 4000-4002 mapped to container port 3000</li>
                        <li><strong>Network Mode:</strong> Bridge (default Docker networking)</li>
                    </Box>
                </Grid>

                {/* Results */}
                <Grid item mt={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Results & Impact</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Production Deployment:</strong> Successfully deployed to <a href="https://acme.wemofit.io/" target="_blank" rel="noopener noreferrer" style={{color: '#8D53FF'}}>acme.wemofit.io</a></li>
                        <li><strong>Infrastructure Automation:</strong> Reduced deployment time from hours to minutes with Docker</li>
                        <li><strong>Environment Consistency:</strong> Eliminated "works on my machine" issues with containerization</li>
                        <li><strong>Scalability:</strong> Created foundation for horizontal scaling with ALB and container orchestration</li>
                        <li><strong>High Availability:</strong> Multi-AZ deployment with automatic failover capabilities</li>
                        <li><strong>Cost Optimization:</strong> Single RDS instance serving multiple databases reduced infrastructure costs</li>
                        <li><strong>Security Improvements:</strong> Network isolation with VPC and security groups, non-root container execution</li>
                        <li><strong>Documentation:</strong> Comprehensive infrastructure documentation for future DevOps engineers</li>
                    </Box>
                </Grid>

                {/* Key Learnings */}
                <Grid item mt={4} mb={4}>
                    <Box component={'h2'} className={Style.sectionTitle}>Key Learnings</Box>
                    <Box component={'ul'} className={Style.list}>
                        <li><strong>Legacy System Migration:</strong> Learned to balance modernization with backward compatibility when dealing with decade-old codebases</li>
                        <li><strong>Docker Best Practices:</strong> Mastered multi-stage builds, layer caching, non-root users, and proper entrypoint scripts</li>
                        <li><strong>AWS Networking:</strong> Deep understanding of VPC, subnets, security groups, and load balancer configuration</li>
                        <li><strong>Database Management:</strong> Experience with RDS provisioning, multi-database setup, and PostgreSQL user permissions</li>
                        <li><strong>Troubleshooting Skills:</strong> Developed systematic approach to debugging container, network, and deployment issues</li>
                        <li><strong>Infrastructure Documentation:</strong> Importance of documenting infrastructure decisions and configurations for team knowledge transfer</li>
                        <li><strong>Ruby on Rails Deployment:</strong> Learned Rails-specific deployment considerations (asset pipeline, migrations, secret management)</li>
                        <li><strong>Security Mindset:</strong> Understood importance of least-privilege access, security group layering, and secret management</li>
                        <li><strong>AWS CLI Proficiency:</strong> Gained hands-on experience with AWS CLI for infrastructure management and debugging</li>
                        <li><strong>Production Readiness:</strong> Learned difference between development and production configurations, importance of health checks and monitoring</li>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
