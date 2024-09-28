import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class StatusRepository {
  constructor(private readonly prismaService: PrismaService) {}

  getDatabaseVersion() {
    return this.prismaService.$queryRaw<[{ server_version: string }]>`SHOW server_version;`;
  }

  getDatabaseMaxConnections() {
    return this.prismaService.$queryRaw<[{ max_connections: string }]>`SHOW max_connections;`;
  }

  getDatabaseOpenedConnections() {
    const databaseName = process.env.POSTGRES_DB;

    return this.prismaService.$queryRaw<[{ count: number }]>`SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = ${databaseName};`;
  }
}
