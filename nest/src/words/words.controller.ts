// src/words/words.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { WordsService } from './words.service';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get()
  async findAll() {
    return this.wordsService.findAll();
  }

  @Post()
  async create(@Body() dto: { word: string; meaning: string }) {
    return this.wordsService.create(dto);
  }

  @Get('hello')
  getHello(): string {
    return this.wordsService.getHello();
  }
}
