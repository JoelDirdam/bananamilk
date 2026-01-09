import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('admin')
@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@ApiBearerAuth()
export class AdminController {
  @Get('health-secure')
  @ApiOperation({ summary: 'Health check protegido solo para ADMIN' })
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 403, description: 'Forbidden - Solo ADMIN' })
  getHealthSecure(@CurrentUser() user: any) {
    return {
      status: 'ok',
      message: 'Endpoint protegido funcionando',
      user: {
        id: user.userId,
        email: user.email,
        role: user.role,
      },
    };
  }
}


