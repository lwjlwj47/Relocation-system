package com.example.move.controller;

import com.example.move.pojo.Project;
import com.example.move.pojo.Result;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;

@RestController
@RequestMapping("/login")
public class LoginController {
    @GetMapping("/queryProjectInfo")
    public Result Login(@RequestParam String code) throws IOException {
        System.out.println(code);
        String url = "https://api.weixin.qq.com/sns/jscode2session?appid=wxa09e12a819f978e4&secret=303cccf759df034fcffe30ff9fb72ab0&js_code="+code+"&grant_type=authorization_code";
        HttpClient httpClient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(url);
        HttpResponse response = httpClient.execute(httpGet);
        return Result.success(EntityUtils.toString(response.getEntity(), "UTF-8"));
    }
}
