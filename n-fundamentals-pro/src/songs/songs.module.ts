import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connection';

// mocking function for test
// const mockSongsService = {
//   findAll() {
//     return [{ id: 1, title: 'Lasting lover' }];
//   },
// };

@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    // we can also write it like
    // {
    //   provide: SongsService,
    //   useClass: SongsService,
    // },
    // To mock we can use below method
    // {
    //   provide: SongsService,
    //   useValue: mockSongsService,
    // },
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class SongsModule {}
