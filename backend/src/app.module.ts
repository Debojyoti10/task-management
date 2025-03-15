import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from './tasks/task.controller';
import { TaskService } from './tasks/task.service';
import { Task, TaskSchema } from './tasks/task.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/taskDB'),
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}
