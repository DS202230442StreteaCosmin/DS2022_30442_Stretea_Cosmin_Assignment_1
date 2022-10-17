import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Repository } from 'typeorm';
import { Device } from './entities/device.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DevicesService {
  @InjectRepository(Device)
  private devicesRepository: Repository<Device>;

  async create(createDeviceDto: CreateDeviceDto) {
    const createdDevice = this.devicesRepository.create({
      ...createDeviceDto,
      user: null,
    });
    await this.devicesRepository.save(createdDevice);
    return createdDevice;
  }

  async findAll() {
    return await this.devicesRepository.find();
  }

  async findOne(id: string) {
    return await this.devicesRepository.findOneOrFail({
      where: { id: id },
    });
  }

  async update(id: string, updateDeviceDto: UpdateDeviceDto) {
    await this.devicesRepository.update({ id: id }, updateDeviceDto);
    return this.devicesRepository.findOneOrFail({
      where: { id: id },
    });
  }

  async remove(id: string) {
    const removedDevice = await this.devicesRepository.findOneOrFail({
      where: { id: id },
    });
    await this.devicesRepository.remove(removedDevice);
    return removedDevice;
  }
}
