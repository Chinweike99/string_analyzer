import { Module } from '@nestjs/common';
import { StringAnalysisController } from './string-analysis/controllers/string-analysis.controller';
import { StringAnalysisService } from './string-analysis/services/string-analysis.service';

@Module({
  imports: [],
  controllers: [StringAnalysisController],
  providers: [StringAnalysisService],
})
export class AppModule {}