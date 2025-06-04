// src/words/words.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { WordsService } from './words.service';
import { WordDto } from './dto/word.dto';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get()
  findAll(): WordDto[] {
    return this.wordsService.findAll();
  }

  @Post()
  create(@Body() dto: { word: string; meaning: string }) {
    return this.wordsService.create(dto);
  }
}
