package com.techwizzle.site.controllers;

import com.techwizzle.site.model.Benchmark;
import com.techwizzle.site.services.BenchmarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin //TODO - Allow only authorized domains
@RequestMapping("/benchmark")
public class BenchmarkController {
    private final BenchmarkService benchmarkService;

    @Autowired
    public BenchmarkController(BenchmarkService benchmarkService) {
        this.benchmarkService = benchmarkService;
    }

    @GetMapping("/list")
    public Iterable<Benchmark> listBenchmarks(){
        return benchmarkService.getAllBenchmarks();
    }
}
