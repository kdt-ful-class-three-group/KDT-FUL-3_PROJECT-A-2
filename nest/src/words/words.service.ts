// src/words/words.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';

/**
 * Word 타입을 외부에서 import할 수 있도록 export 처리
 */
export interface Word {
  id: number;
  word: string;
  meaning: string;
}

@Injectable()
export class WordsService {
  // 메모리상에서 단어 목록을 저장할 배열
  private words: Word[] = [];
  // 새 단어에 부여할 ID 시퀀스
  private nextId = 1;

  /**
   * 테스트용 메서드: 간단히 문자열을 반환합니다.
   */
  getHello(): string {
    return 'Hello from WordsService!';
  }

  /**
   * 새로운 단어를 생성합니다.
   * @param dto { word: string; meaning: string }
   * @returns 생성된 Word 객체
   */
  create(dto: { word: string; meaning: string }): Word {
    const word: Word = {
      id: this.nextId++,
      word: dto.word,
      meaning: dto.meaning,
    };
    this.words.push(word);
    return word;
  }

  /**
   * 현재까지 저장된 모든 단어를 배열로 반환합니다.
   * @returns Word[]
   */
  findAll(): Word[] {
    return this.words;
  }

  /**
   * 특정 ID에 해당하는 단어를 조회합니다.
   * 없으면 NotFoundException을 던집니다.
   * @param id 조회할 단어의 ID
   * @returns Word
   */
  findOne(id: number): Word {
    const found = this.words.find((w) => w.id === id);
    if (!found) {
      throw new NotFoundException(`Word with id ${id} not found`);
    }
    return found;
  }

  /**
   * 특정 ID의 단어를 삭제합니다.
   * 없으면 NotFoundException을 던집니다.
   * @param id 삭제할 단어의 ID
   */
  remove(id: number): void {
    const index = this.words.findIndex((w) => w.id === id);
    if (index === -1) {
      throw new NotFoundException(`Word with id ${id} not found`);
    }
    this.words.splice(index, 1);
  }

  /**
   * 특정 ID의 단어를 부분 수정합니다.
   * @param id 수정할 단어의 ID
   * @param dto 수정할 속성 { word?, meaning? }
   * @returns 업데이트된 Word
   */
  update(id: number, dto: { word?: string; meaning?: string }): Word {
    const word = this.findOne(id);
    if (dto.word !== undefined) {
      word.word = dto.word;
    }
    if (dto.meaning !== undefined) {
      word.meaning = dto.meaning;
    }
    return word;
  }
}
