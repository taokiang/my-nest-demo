import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DemoModule } from './demo/demo.module.js';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { McpClientModule } from './mcp-client/mcp-client.module';
import { McpAgentModule } from './mcp-agent/mcp-agent.module';

@Module({
  imports: [DemoModule, PrismaModule, UserModule, PostModule, McpClientModule, McpAgentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
