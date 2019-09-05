package com.dgomez.developer.heroines.controller

import com.dgomez.developer.heroines.data.HeroinesRepository
import com.dgomez.developer.heroines.model.Heroin
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletResponse

@RestController
class HeroinesController {

    @Autowired
    lateinit var repository: HeroinesRepository

    @CrossOrigin
    @GetMapping("/ada-heroines")
    fun listAdaHeroines(): List<Heroin> {
        return repository.findAll()
    }

    @CrossOrigin
    @GetMapping("/ada-heroines/{id}")
    fun getAdaHeroinById(@PathVariable("id") id: String): Heroin {
        return repository.getOne(id)
    }

    @CrossOrigin
    @PostMapping("/ada-heorines")
    fun addHeroin(@RequestBody heroin: Heroin, response: HttpServletResponse): Heroin? {
        response.status = HttpStatus.CREATED.value()
        return repository.save(heroin)
    }

    @CrossOrigin
    @PutMapping("/ada-heroines/{id}")
    fun updateHeroin(@PathVariable("id") id: String, @RequestBody heroin: Heroin,
                     response: HttpServletResponse): Heroin? {
        if (repository.existsById(id)) {
            return repository.saveAndFlush(heroin)
        }
        response.status = HttpStatus.BAD_REQUEST.value()
        return null
    }

    @CrossOrigin
    @DeleteMapping("/ada-heroines/{id}")
    fun deleteHeroin(@PathVariable("id") id: String, response: HttpServletResponse) {
        response.status = HttpStatus.NO_CONTENT.value()
        repository.deleteById(id)
    }
}