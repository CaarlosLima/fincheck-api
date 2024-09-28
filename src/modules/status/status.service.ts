import { Injectable } from '@nestjs/common';
import { StatusRepository } from 'src/shared/database/repositories/status.repositories';

@Injectable()
export class StatusService {
  constructor(private readonly statusRepo: StatusRepository) {}

  async getStatus() {
    const updatedAt = new Date().toISOString();

    const [{ server_version: databaseVersion }] = await this.statusRepo.getDatabaseVersion();
    const [{ max_connections: dataBaseMaxConnections }] = await this.statusRepo.getDatabaseMaxConnections();
    const [{ count: dataBaseOpenedConnections }] = await this.statusRepo.getDatabaseOpenedConnections();

    return {
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: databaseVersion,
          max_connections: parseInt(dataBaseMaxConnections),
          opened_connections: dataBaseOpenedConnections,
        },
      },
    };
  }
}
