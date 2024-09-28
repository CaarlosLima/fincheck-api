import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BankAccountsRepository } from './repositories/bank-accounts.repositories';
import { CategoriesRepository } from './repositories/categories.repositories';
import { StatusRepository } from './repositories/status.repositories';
import { TransactionsRepository } from './repositories/transactions.repositories';
import { UsersRepository } from './repositories/users.repositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository, CategoriesRepository, BankAccountsRepository, TransactionsRepository, StatusRepository],
  exports: [UsersRepository, CategoriesRepository, BankAccountsRepository, TransactionsRepository, StatusRepository],
})
export class DatabaseModule {}
