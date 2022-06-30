import {
	Controller,
	Request,
	Post,
	UseGuards,
	HttpStatus,
	HttpCode,
	Body,
	Header,
} from '@nestjs/common'
import { LocalAuthGuard } from './local-auth.guard'
import { AuthService } from './auth.service'
import { CreateUserDto } from 'src/users/dto/user-registration.dto'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Request() req) {
		return this.authService.login(req.user)
	}

	@Post('registration')
	@HttpCode(HttpStatus.CREATED)
	@Header('origin', 'none')
	create(@Body() createUserDto: CreateUserDto) {
		return this.authService.registration(createUserDto)
	}
}
