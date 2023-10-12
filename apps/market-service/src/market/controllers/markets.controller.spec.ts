import { Test, TestingModule } from '@nestjs/testing';
import { MarketsController } from '../controllers/markets.controller';
import { MarketsService } from '../services/markets.service';

describe('MarketsController', () => {
  let controller: MarketsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarketsController],
      providers: [MarketsService],
    }).compile();

    controller = module.get<MarketsController>(MarketsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
