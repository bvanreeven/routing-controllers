import {Request, Response} from "express";
import {Controller, Get, Post, Put, Patch, Delete, Req} from "../../src/Annotations";

@Controller()
export class BlogController {

    @Get('/blogs', { jsonResponse: true })
    getAll() {
        return [
            { id: 1, name: 'First blog!' },
            { id: 2, name: 'Second blog!' }
        ];
    }

    @Get('/blogs/:id')
    getOne() {
        return 'First blog!';
    }

    @Post('/blogs')
    post(@Req() request: Request) {
        let blog = JSON.stringify(request.body);
        return 'Blog ' + blog + ' !saved!';
    }

    @Put('/blogs/:id')
    put(@Req() request: Request) {
        return 'Blog #' + request.params.id + ' has been putted!';
    }

    @Patch('/blogs/:id')
    patch(@Req() request: Request) {
        return 'Blog #' + request.params.id + ' has been patched!';
    }

    @Delete('/blogs/:id')
    remove(@Req() request: Request) {
        return 'Blog #' + request.params.id + ' has been removed!';
    }

}