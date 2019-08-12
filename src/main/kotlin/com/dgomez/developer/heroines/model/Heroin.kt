package com.dgomez.developer.heroines.model

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "heroines")
data class Heroin(
        @Id
        val id: String = UUID.randomUUID().toString(),
        val name: String = "",
        @ElementCollection
        @CollectionTable(name = "superpowers", joinColumns = [JoinColumn(name = "id")])
        @Column(name = "superpowers") val superpowers: List<String>)