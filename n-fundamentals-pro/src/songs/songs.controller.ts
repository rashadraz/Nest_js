import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songService: SongsService) {}
  @Get()
  findAll() {
    return this.songService.findAll();
  }
  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `fetch song on the based id ${typeof id}`;
  }
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songService.create(createSongDTO);
  }
  @Put(':id')
  update() {
    return 'update song on the based id ';
  }
  @Delete(':id')
  delete() {
    return 'delete song on the base id';
  }
}
