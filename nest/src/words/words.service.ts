// src/words/words.controller.ts
import { Injectable } from '@nestjs/common';
import { pool } from '../DB/DB';

export interface Word {
  id: number;
  word: string;
  meaning: string;
}

@Injectable()
export class WordsService {
  async findAll(): Promise<Word[]> {
    const result = await pool.query('SELECT * FROM words ORDER BY id ASC');
    return result.rows;
  }

  async create(dto: { word: string; meaning: string }): Promise<Word> {
    const result = await pool.query(
      'INSERT INTO words (word, meaning) VALUES ($1, $2) RETURNING *',
      [dto.word, dto.meaning],
    );
    return result.rows[0];
  }

  getHello(): string {
    return 'Hello from WordsService!';
  }
}
