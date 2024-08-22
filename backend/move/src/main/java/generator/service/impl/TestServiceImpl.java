package generator.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import generator.com.example.move.Test;
import generator.service.TestService;
import generator.mapper.TestMapper;
import org.springframework.stereotype.Service;

/**
* @author liuwe
* @description 针对表【test】的数据库操作Service实现
* @createDate 2024-08-21 19:20:09
*/
@Service
public class TestServiceImpl extends ServiceImpl<TestMapper, Test>
    implements TestService{

}




