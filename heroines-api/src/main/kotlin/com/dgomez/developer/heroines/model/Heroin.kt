package com.dgomez.developer.heroines.model

import java.util.*
import javax.persistence.ElementCollection
import javax.persistence.Entity
import javax.persistence.Id

@Entity
data class Heroin(
        @Id
        val id: String = UUID.randomUUID().toString(),
        val name: String = "",
        @ElementCollection(targetClass = String::class) val superPowers: List<String> = listOf())