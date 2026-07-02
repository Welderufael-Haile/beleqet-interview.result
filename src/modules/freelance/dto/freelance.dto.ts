import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateFreelanceJobDto {
  @ApiProperty()
  @IsString()
  title!: string;

  @ApiProperty()
  @IsString()
  description!: string;

  @ApiProperty()
  @IsString()
  categoryId!: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  budgetMin!: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  budgetMax!: number;

  @ApiProperty({ required: false, default: 'FIXED' })
  @IsOptional()
  @IsString()
  pricingType?: string;

  @ApiProperty()
  @IsInt()
  @IsPositive()
  deadlineDays!: number;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  skills!: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  locationPreference?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  experienceLevel?: string;

  @ApiProperty({ required: false, type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  attachments?: string[];
}

export class CreateBidDto {
  @ApiProperty()
  @IsInt()
  @IsPositive()
  amount!: number;

  @ApiProperty()
  @IsInt()
  @IsPositive()
  timelineDays!: number;

  @ApiProperty()
  @IsString()
  coverLetter!: string;
}

export class QueryFreelanceJobsDto {
  @IsOptional()
  @IsString()
  q?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  page?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  limit?: number;
}
