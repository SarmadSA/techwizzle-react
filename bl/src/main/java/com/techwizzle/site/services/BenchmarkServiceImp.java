package com.techwizzle.site.services;

import com.techwizzle.site.model.Benchmark;
import com.techwizzle.site.repositories.BenchmarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BenchmarkServiceImp implements BenchmarkService {

    private final BenchmarkRepository benchmarkRepository;

    @Autowired
    public BenchmarkServiceImp(BenchmarkRepository benchmarkRepository) {
        this.benchmarkRepository = benchmarkRepository;
    }

    @Override
    public Iterable<Benchmark> getAllBenchmarks() {
        return benchmarkRepository.findAll();
    }
}