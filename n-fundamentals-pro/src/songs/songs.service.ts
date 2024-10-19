import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local db
  //local array

  private readonly songs = [];
  create(song) {
    // save the song in the database
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    try {
      // fetch the songs from the db

      // // lets suppose errors while fetching the data from db and we do not add any try catch
      // throw new Error('Error in Db while fetching record');
      return this.songs;
    } catch (error) {
      throw new HttpException('Server error', HttpStatus.INTERNAL_SERVER_ERROR);
      console.log(error);
    }
  }
}
