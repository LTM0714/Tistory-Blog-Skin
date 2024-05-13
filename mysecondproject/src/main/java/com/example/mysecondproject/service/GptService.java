package com.example.mysecondproject.service;

import com.example.mysecondproject.OpenAIApi;
import org.springframework.stereotype.Service;

@Service
public class GptService {
    private final OpenAIApi openAIApi;

    public GptService(){
        this.openAIApi=new OpenAIApi();
    }

    public String ask(String prompt){
        return openAIApi.ask(prompt);
    }
}
